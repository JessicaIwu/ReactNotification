import React, { Component } from "react";
import SingleQuestion from "./SingleQuestion";
// import QuestionContainer from './QuestionContainer';

// class QuestionList extends Component{
//     render(){

//         const { questions } = this.props;
//         console.log(questions)
//         const QList = questions.map(question => {
//             return(
//                 <div>
//                     <p>Question: {questions.question}</p>
//                     <p>Answer: {questions.answer}</p>
//                 </div>
//             )
//         });
//        return(
//            <div>
//                {/* <QuestionContainer {...questions} />    */}
//                {QList}
//            </div>
//        )
//     }
// }

class QuestionList extends Component {
  render() {
    console.log(this.props);
    const { questions, showAnswer } = this.props;
    // const TheList = questions.map(question => {
    //     return(
    //         <div>
    //             <p>Question: {question.question}</p>
    //             <p>Answer: {question.answer}</p>
    //         </div>
    //     )
    // });

    return (
      <div>
        {questions.map((question, i) => {
          return (
            <div key={i}>
              <SingleQuestion
                question={question.question}
                answer={question.answer}
                showAnswer={showAnswer}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuestionList;
