import React, { useCallback, useContext } from 'react';
import { QuizScreenNavigationProp } from '../../Types';
import { Quiz as QuizC } from '../../Containers';
import { QuizData } from '../../Context';
import { useQuiz } from '../../Hooks';

type Props = {
  navigation: QuizScreenNavigationProp;
};

// TODO: clean code and tests

const Quiz = (props: Props) => {
  const { navigation } = props;
  const { quizData } = useContext(QuizData.Context);
  const [{ setAnswers, answers }, currentIndexQuestion] = useQuiz({
    questions: quizData,
  });
  const currentIndex = currentIndexQuestion + 1;

  const goToResultsScreen = useCallback(() => {
    return navigation.push('Results', { answers: answers });
  }, [answers]);

  const onAnswerPress = (answer: string) => {
    if (currentIndex === quizData.length) {
      return goToResultsScreen();
    }
    return setAnswers(answer);
  };

  return (
    <QuizC
      onAnswerPress={onAnswerPress}
      currentQuestion={quizData[currentIndexQuestion]}
      questionIndicator={`${currentIndex}/${quizData.length}`}
    />
  );
};

export default Quiz;
