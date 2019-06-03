import React, { Component } from "react";
// import Confirmation from "./Confirmation";

class SingleQuestion extends Component {
  state = {
    notification: this.props.notification,
    showControl: false,
    disabled: false,
    showAnswer: false
  };

  handleClick = () => {
    this.setState({
      showAnswer: true,
      disabled: true
      //   disabled: !this.state.disabled
    });
  };

  render() {
    const { question, answer } = this.props;
    const { showAnswer } = this.state;

    return (
      <div>
        {/* <Confirmation notification={notification} /> */}
        <p>Question: {question}</p>
        {this.props.showAnswer ? <p>Answer: {answer}</p> : null}
        <button
          className="btn btn-primary show-answer"
          disabled={this.state.disabled}
        >
          {/* onClick={this.handleClick} */}
          Show Answer
        </button>
      </div>
    );
  }
}

export default SingleQuestion;
