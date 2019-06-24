import React from "react";

export default ({activeAnswer, question, showAnswer, componentKey, selectedKey, showControl}) => (
	<div>
		<p>Question: {question}</p>
		{<p> {selectedKey === componentKey && showAnswer ? activeAnswer : null}</p>}
		<button
			className="btn btn-primary show-answer"
			disabled={showAnswer}
			onClick={() =>showControl(componentKey)}>
			Show Answer
		</button>
	</div>
)
