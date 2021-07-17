import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-paper';

type Props = {
  onGoToHomeScreenPress: () => void;
};

const Results = (props: Props) => {
  const { onGoToHomeScreenPress } = props;

  return (
    <View style={styles.container}>
      <Text>Results</Text>
      <Button icon="camera" mode="contained" onPress={onGoToHomeScreenPress}>
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
