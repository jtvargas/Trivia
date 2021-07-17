import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-paper';
import { HomeScreenNavigationProp } from '../../Types';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  const { navigation } = props;
  const goToQuizScreen = useCallback(() => {
    return navigation.push('Quiz');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textRegular}>HOME!</Text>
      <Button icon="camera" mode="contained" onPress={goToQuizScreen}>
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
  box: {
    height: '100@s',
    width: '100@s',
    backgroundColor: 'blue',
  },
  textMedium: {
    fontFamily: 'Poppins_500Medium',
  },
  textRegular: {
    fontFamily: 'Poppins_400Regular',
  },
  textRegularItalic: {
    fontFamily: 'Poppins_400Regular_Italic',
  },
  textMediumItalic: {
    fontFamily: 'Poppins_500Medium_Italic',
  },
  textBold: {
    fontFamily: 'Poppins_700Bold',
  },
});

export default Home;
