import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScaledSheet } from 'react-native-size-matters';
import { Theme, i18n } from '../../Core';
import { Button, Text } from '../../Components';

interface Props {
  onBeginPress: () => void;
}

const Home = (props: Props) => {
  const { onBeginPress } = props;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <View style={styles.content}>
        <View style={styles.topEmptyContent} />
        <View style={styles.infoContent}>
          <Text
            label={i18n.t('Home.WelcomeToTriviaChallenge')}
            size={'largeTitle'}
            textAlignment={'center'}
            medium={true}
          />

          <Text
            label={i18n.t('Home.questionInfo')}
            size={'title2'}
            textAlignment={'center'}
          />
          <Text
            label={i18n.t('Home.questionScore')}
            size={'title3'}
            textAlignment={'center'}
          />
          <Button
            label={i18n.t('Home.begin')}
            onPress={onBeginPress}
            textProps={{ medium: true }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  topEmptyContent: {
    flex: 1,
  },
  infoContent: {
    justifyContent: 'space-around',
    flex: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    ...Theme.spacers.MA_5,
  },
});

export default Home;
