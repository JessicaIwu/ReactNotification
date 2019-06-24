import React, { Component } from "react";
import Confirmation from "./components/Confirmation";
import QuestionList from "./components/QuestionList";
import "./App.css";

class App extends Component {
	state = {
		notification: {
			message: "Reveal the answer?",
			type: "success",
			accept: function() {},
			decline: function() {},
			showActiveAnswer: false
		},
		questions: [
			{
				question: "What is the average the airspeed velocity of a (European) unladen swallow?",
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
		showAnswer: false,
		showConfirmation: false
	};

	handleShowAnswer = () => {
		this.setState({
			showAnswer: true,
			showActiveAnswer: true
		});
	};

	handleShowControl = () => {
		this.setState({ showConfirmation: true });
	};

	handleNotYet = () => {
		this.setState({ 
			showConfirmation: false,
			showAnswer: false,
			showActiveAnswer: false
		 })
	}

	render() {
		const { notification, questions, showConfirmation, showAnswer } = this.state;
		return (
			<div id="app">
				<Confirmation
					notification={notification}
					handleShowAnswer={this.handleShowAnswer}
					showConfirmation={showConfirmation}
					handleNotYet={this.handleNotYet}
				/>
				<QuestionList
					questions={questions}
					showAnswer={showAnswer}
					showActiveAnswer={this.state.showActiveAnswer}
					handleShowControl={this.handleShowControl}
				/>
			</div>
		);
	}
}

export default App;
