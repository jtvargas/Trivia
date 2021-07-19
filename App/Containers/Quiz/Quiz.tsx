import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '../../Core';
import { Text, QuizBoard } from '../../Components';
import { Question } from '../../Types';

interface Props {
  onAnswerPress: () => void;
  currentQuestion: Question;
  questionIndicator: string;
}

const Quiz = (props: Props) => {
  const {
    onAnswerPress = () => null,
    currentQuestion,
    questionIndicator,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.quizCategoryContainer}>
          <View style={styles.section}>
            <Text
              label={currentQuestion.category}
              size={'title2'}
              textAlignment={'center'}
              medium={true}
            />
          </View>

          <View style={styles.section}>
            <Text
              label={questionIndicator}
              size={'title3'}
              textAlignment={'center'}
              medium={true}
            />
          </View>
        </View>

        <View style={styles.quizBoardContainer}>
          <QuizBoard
            onAnswerPress={onAnswerPress}
            currentQuestion={currentQuestion}
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
  content: {
    flex: 1,
    ...Theme.spacers.MA_5,
  },
  quizBoardContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  quizCategoryContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Quiz;
