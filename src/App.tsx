import React, { useState } from 'react';
import SurveyQuestion from './SurveyQuestion';

interface SurveyQuestion {
  id: number;
  question: string;
  answer: string;
}

const Survey: React.FC = () => {
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion(event.target.value);
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAnswer(event.target.value);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, question: currentQuestion, answer: currentAnswer }]);
    setCurrentQuestion('');
    setCurrentAnswer('');
  };

  return (
    <div>
      <h1>Create a Survey</h1>
      <div>
        <label htmlFor="question-input">Question:</label>
        <input id="question-input" type="text" value={currentQuestion} onChange={handleQuestionChange} />
      </div>
      <div>
        <label htmlFor="answer-input">Answer:</label>
        <input id="answer-input" type="text" value={currentAnswer} onChange={handleAnswerChange} />
      </div>
      <button onClick={handleAddQuestion}>Add Question</button>
      <h2>Survey Questions:</h2>
      {questions.map((question) => (
        <SurveyQuestion key={question.id} question={question.question} answer={question.answer} />
      ))}
    </div>
  );
};

export default Survey;