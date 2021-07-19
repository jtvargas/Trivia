import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '../../Core';
import { Question } from '../../Types';
import QuizCard from '../QuizCard';
import QuizBoardAnswerInput from './QuizBoardAnswerInput';

interface Props {
  onAnswerPress: (answerKey: string) => void;
  currentQuestion: Question;
}

const QuizBoard = (props: Props) => {
  const { currentQuestion, onAnswerPress = () => null } = props;
  return (
    <>
      <QuizCard question={currentQuestion.question} />
      <View style={styles.answersContainer}>
        <QuizBoardAnswerInput
          onAnswerPress={onAnswerPress}
          answerType={currentQuestion.type}
        />
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  answersContainer: {
    ...Theme.spacers.MT_15,
  },
});

export default QuizBoard;
