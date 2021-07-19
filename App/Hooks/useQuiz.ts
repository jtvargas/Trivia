import { useState, useEffect } from 'react';
import { Answer, Question } from '../Types';

const useQuiz = ({ questions }: { questions: [] }) => {
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
  const [answers, setCurrentQuestionAnswer] = useState<Answer>({});

  const handleSetAnswer = (answer: string) => {
    const currentQuestion: Question = questions[currentIndexQuestion];
    setCurrentIndexQuestion(currentIndexQuestion + 1);
    setCurrentQuestionAnswer(prev => ({
      ...prev,
      [currentQuestion?.id]: answer,
    }));
  };

  return [{ answers, setAnswers: handleSetAnswer }, currentIndexQuestion];
};

export { useQuiz };
