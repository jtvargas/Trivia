import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from '../../Components';

type Props = {
  onFinishPress: () => void;
};

const Quiz = (props: Props) => {
  const { onFinishPress } = props;
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
      <Button mode="contained" onPress={onFinishPress}>
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
