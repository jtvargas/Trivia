import React from 'react';

//Answer Types
import QuizBoardAnswerBoolean from './QuizBoardAnswerBoolean';

interface Props {
  answerType: string;
  onAnswerPress: (value: string) => void;
}

const AnswerInputComponents = {
  boolean: QuizBoardAnswerBoolean,
};

const QuizBoardAnswerInput = (props: Props) => {
  const { answerType = 'boolean', onAnswerPress = () => null } = props;
  const QuizBoardAnswerInputComponent = AnswerInputComponents[answerType];

  return <QuizBoardAnswerInputComponent onAnswerPress={onAnswerPress} />;
};

export default QuizBoardAnswerInput;
