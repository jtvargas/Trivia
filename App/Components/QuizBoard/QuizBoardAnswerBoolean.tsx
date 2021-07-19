import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { i18n } from '../../Core';
import Button from '../Button';

interface Props {
  onAnswerPress: (value: string) => void;
}

const buttonTextProps = {
  isCapitalize: true,
  medium: true,
  size: 'title3',
};

const QuizBoardAnswerBoolean = (props: Props) => {
  const { onAnswerPress } = props;

  const handleOnAnswerPress = (key: string) => () => {
    return onAnswerPress(key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleOnAnswerPress('False')}
          label={i18n.t('Quiz.answers.boolean.false')}
          isUpperCase={false}
          textProps={buttonTextProps}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleOnAnswerPress('True')}
          label={i18n.t('Quiz.answers.boolean.true')}
          isUpperCase={false}
          textProps={buttonTextProps}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around' },
  buttonContainer: {
    width: '40%',
  },
});

export default QuizBoardAnswerBoolean;
