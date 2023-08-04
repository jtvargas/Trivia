import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '../../Core';
import Text from '../Text';

interface Props {
  isCorrect: boolean;
  question: string;
  currentAnswer: string;
  correctAnswer: string;
}

const RESULT_ICON_SIZE = 32;
const ICON_NAME_CORRECT_ANSWER = 'checkmark-sharp';
const ICON_NAME_WRONG_ANSWER = 'close';

const QuizResultItem = (props: Props) => {
  const { isCorrect, question, currentAnswer, correctAnswer } = props;
  const renderResultIcon = useCallback(() => {
    const iconName = isCorrect
      ? ICON_NAME_CORRECT_ANSWER
      : ICON_NAME_WRONG_ANSWER;

    const iconColor = isCorrect ? Theme.colors.success : Theme.colors.error;
    return (
      <View testID={`ICON_${iconName}_ID`}>
        <Ionicons
          name={iconName}
          size={RESULT_ICON_SIZE}
          color={iconColor}
          style={styles.iconContainer}
        />
      </View>
    );
  }, [isCorrect]);

  return (
    <View style={styles.container}>
      {renderResultIcon()}
      <View style={styles.questionContainer}>
        <Text
          label={question}
          size={'body'}
          medium={true}
          textAlignment={'left'}
        />
        <View style={styles.answerChipContainer}>
          <Chip style={styles.answerChip}>Picked: {currentAnswer}</Chip>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  questionContainer: {
    flex: 1,
  },
  answerChipContainer: {
    flexDirection: 'row',
  },
  answerChip: {
    backgroundColor: Theme.colors.secondary,
  },
  iconContainer: { ...Theme.spacers.MR_2 },
});

export default QuizResultItem;
