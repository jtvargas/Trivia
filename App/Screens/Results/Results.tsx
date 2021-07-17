import React, { useCallback } from 'react';
import { CommonActions } from '@react-navigation/native';
import { ResultsScreenNavigationProp } from '../../Types';
import { Results as ResultsC } from '../../Containers';

type Props = {
  navigation: ResultsScreenNavigationProp;
};
const RESET_STACK_TO_HOME = {
  index: 1,
  routes: [{ name: 'Home' }],
};
const Results = (props: Props) => {
  const { navigation } = props;
  const goToHomeScreen = useCallback(() => {
    return navigation.dispatch(CommonActions.reset(RESET_STACK_TO_HOME));
  }, []);

  return <ResultsC onGoToHomeScreenPress={goToHomeScreen} />;
};

export default Results;
