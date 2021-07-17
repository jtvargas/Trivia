import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from '../../Components';
import { useTranslation } from 'react-i18next';

interface Props {
  onBeginPress: () => void;
}

const Home = (props: Props) => {
  const { onBeginPress } = props;
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.textRegular}>
        {t('Home.WelcomeToTriviaChallenge')}
      </Text>
      <Button icon="camera" mode="contained" onPress={onBeginPress}>
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
  textRegular: {
    fontFamily: 'Poppins_400Regular',
  },
});

export default Home;
