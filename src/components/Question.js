import React from 'react';

function Question({ question, onAnswerOptionClick }) {
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {question.id}</span>/{question.total}
      </div>
      <div className="question-text">{question.text}</div>
      <div className="answer-section">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerOptionClick(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
