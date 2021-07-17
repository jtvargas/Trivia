import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-paper';
import { QuizScreenNavigationProp } from '../../Types';

type Props = {
  navigation: QuizScreenNavigationProp;
};

const Quiz = (props: Props) => {
  const { navigation } = props;
  const goToResultsScreen = useCallback(() => {
    return navigation.push('Results', { answers: [] });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
      <Button icon="camera" mode="contained" onPress={goToResultsScreen}>
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

export default Quiz;
