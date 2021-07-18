import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { Question } from '../../Types';

interface QuizDataContextType {
  quizData: Array<Question>;
  setQuizData: Dispatch<SetStateAction<Question[]>>;
}
const QuizDataContext = createContext<QuizDataContextType>({
  quizData: [],
  setQuizData: () => null,
});

const QuizDataContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [quizData, setQuizData] = useState([]);

  return (
    <QuizDataContext.Provider value={{ quizData, setQuizData }}>
      {children}
    </QuizDataContext.Provider>
  );
};

export { QuizDataContextProvider, QuizDataContext };
