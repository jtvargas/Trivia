import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { ResultsScreenNavigationProp } from '../../Types';

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

  return (
    <View style={styles.container}>
      <Text>Results</Text>
      <Button icon="camera" mode="contained" onPress={goToHomeScreen}>
        Press me
      </Button>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Results;
