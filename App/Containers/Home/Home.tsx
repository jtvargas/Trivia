import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button, Text } from '../../Components';

interface Props {
  onBeginPress: () => void;
}

const Home = (props: Props) => {
  const { onBeginPress } = props;
  return (
    <View style={styles.container}>
      <Text label={'hello'} size={'largeTitle'} />
      <Button
        onPress={onBeginPress}
        label={'Press Me!'}
        textProps={{
          size: 'title2',
        }}
      />
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
  textRegular: {
    fontFamily: 'Poppins_400Regular',
  },
});

export default Home;
