import React, { Component } from "react"; //check
import Confirmation from "./components/Confirmation"; //how to import components into other components.
import QuestionList from "./components/QuestionList";
import "./App.css"; // how to import css
import QuestionContainer from "./components/QuestionContainer";

class App extends Component {
  state = {
    notification: {
      message: "Reveal the answer?",
      type: "success",
      accept: function() {
        // parent component can do something with accept
      },
      decline: function() {
        // parent component can do something with decline
      }
    },
    questions: [
      {
        question:
          "What is the average the airspeed velocity of a (European) unladen swallow?",
        answer: "11 meters per second"
      },
      {
        question: "What is the value of PI?",
        answer: "1.342"
      },
      {
        question: "How many colors has the rainbow?",
        answer: "7"
      },
      {
        question: "What is the color of water?",
        answer: "colorless"
      }
    ],
    showAnswer: false
  };

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true
    });
  };

  render() {
    const { notification } = this.state; //array destructuring - the object notification is stored as a constant called notification.
    const { questions } = this.state; //instead of passing this.state.questions as props
    return (
      <div id="app">
        <Confirmation
          notification={notification}
          handleShowControl={this.handleShowAnswer}
        />
        <QuestionList
          questions={questions}
          showAnswer={this.state.showAnswer}
        />
        {/* <SingleQuestion notification={notification} /> */}
      </div>
    );
  }
}

export default App;
