import React, { useCallback } from 'react';
import { QuizScreenNavigationProp } from '../../Types';
import { Quiz as QuizC } from '../../Containers';

type Props = {
  navigation: QuizScreenNavigationProp;
};

const Quiz = (props: Props) => {
  const { navigation } = props;
  const goToResultsScreen = useCallback(() => {
    return navigation.push('Results', { answers: [] });
  }, []);

  return <QuizC onFinishPress={goToResultsScreen} />;
};

export default Quiz;
