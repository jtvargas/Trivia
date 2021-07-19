import React from 'react';
import { render, fireEvent } from '../../Utils/Test';
import { i18n } from '../../Core';
import Quiz from './Quiz';

const MOCK_QUESTION = {
  id: 'question_1',
  category: 'Vehicles',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The Battle of Trafalgar took place on October 23rd, 1805',
  correct_answer: 'False',
  incorrect_answers: ['True'],
};

it('should display the quiz layout with questions and trigger on answer press for boolean type question', () => {
  const onAnswerPress = jest.fn();
  const { getByText } = render(
    <Quiz
      onAnswerPress={onAnswerPress}
      currentQuestion={MOCK_QUESTION}
      questionIndicator={'1/1'}
    />,
    {},
  );

  const answerButton = getByText(i18n.t('Quiz.answers.boolean.true'));
  expect(
    getByText('The Battle of Trafalgar took place on October 23rd, 1805'),
  ).toBeTruthy();
  expect(getByText('1/1')).toBeTruthy();
  expect(answerButton).toBeTruthy();
  fireEvent(answerButton, 'onPress');
  expect(onAnswerPress).toHaveBeenCalled();
});
