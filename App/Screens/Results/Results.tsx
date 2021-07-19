import React, { useCallback, useContext } from 'react';
import { CommonActions, useRoute } from '@react-navigation/native';
import { ResultsScreenNavigationProp } from '../../Types';
import { Results as ResultsC } from '../../Containers';
import { QuizData } from '../../Context';
import { Quiz } from '../../Models';

type Props = {
  navigation: ResultsScreenNavigationProp;
};

const RESET_STACK_TO_HOME = {
  index: 1,
  routes: [{ name: 'Home' }],
};

const Results = (props: Props) => {
  const { navigation } = props;
  const { quizData } = useContext(QuizData.Context);
  const { params } = useRoute();

  const goToHomeScreen = useCallback(() => {
    return navigation.dispatch(CommonActions.reset(RESET_STACK_TO_HOME));
  }, []);

  return (
    <ResultsC
      onPlayAgainPress={goToHomeScreen}
      answers={params?.answers}
      questions={quizData}
      score={Quiz.getScore({ answers: params?.answers, questions: quizData })}
    />
  );
};

export default Results;
