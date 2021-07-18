import React, { useCallback, useContext } from 'react';
import { QuizScreenNavigationProp } from '../../Types';
import { Quiz as QuizC } from '../../Containers';
import { QuizData } from '../../Context';

type Props = {
  navigation: QuizScreenNavigationProp;
};

const Quiz = (props: Props) => {
  const { navigation } = props;
  const { quizData } = useContext(QuizData.Context);

  console.log({ quizData });
  const goToResultsScreen = useCallback(() => {
    return navigation.push('Results', { answers: [] });
  }, []);

  return <QuizC onFinishPress={goToResultsScreen} />;
};

export default Quiz;
