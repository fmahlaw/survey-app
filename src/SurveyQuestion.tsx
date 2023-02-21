import React from 'react';

interface SurveyQuestionProps {
  question: string;
  answer: string;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({ question, answer }) => {
  return (
    <div>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default SurveyQuestion;
