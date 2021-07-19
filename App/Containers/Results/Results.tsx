import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScaledSheet } from 'react-native-size-matters';
import { Theme, i18n } from '../../Core';
import { Button, Text, QuizResultList } from '../../Components';
import { Answer, Question } from '../../Types';

interface Props {
  onBeginPress: () => void;
  isDisabledButton: boolean;
  isLoading: boolean;
  answers: Answer;
  questions: Question[];
  score: number;
}

const Results = (props: Props) => {
  const {
    onPlayAgainPress,
    isDisabledButton,
    answers,
    questions,
    score = 0,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <View style={styles.content}>
        <View style={styles.topSection}>
          <Text
            label={i18n.t('Results.youScored')}
            size={'title1'}
            textAlignment={'center'}
            medium={true}
          />
          <Text
            label={`${score}/${questions.length}`}
            size={'title2'}
            textAlignment={'center'}
            medium={true}
          />
        </View>

        <View style={styles.resultsSection}>
          <QuizResultList answers={answers} questions={questions} />
        </View>
        <Button
          label={i18n.t('Results.playAgain')}
          onPress={onPlayAgainPress}
          textProps={{ medium: true }}
          isDisabled={isDisabledButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  topSection: {
    flex: 1,
  },
  resultsSection: {
    flex: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    ...Theme.spacers.MA_5,
  },
});

export default Results;
