import React,{Component} from 'react';
import SingleQuestion from './SingleQuestion';

class QuestionList extends Component {
  constructor () {
    super()

    this.state = {
      selectedKey: null,
      currentAnswer: null
    }

    this.showControl = this.showControl.bind(this)
  }

  showControl (selectedKey) {
    this.props.handleShowControl()
    this.setState({
      selectedKey,
      currentAnswer: this.props.questions[selectedKey].answer
    })
  }

  render = () => (
    this.props.questions.map((question, i) => (
      <div key={i}>
        <SingleQuestion
          componentKey={i}
          question={question.question}
          answer={question.answer}
          showAnswer={this.props.showAnswer}
          showControl={this.showControl}
          activeAnswer={this.state.currentAnswer}
          selectedKey={this.state.selectedKey}
        />
      </div>
    ))
  )
}

export default QuestionList;
