import React from 'react';
import { render, fireEvent } from '../../Utils/Test';
import { i18n } from '../../Core';
import Results from './Results';

const MOCK_QUESTION = {
  id: 'question_1',
  category: 'Vehicles',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The Battle of Trafalgar took place on October 23rd, 1805',
  correct_answer: 'False',
  incorrect_answers: ['True'],
};

it('should display the quiz results with the questions list and their response and the score from the quiz', () => {
  const onPlayAgainPress = jest.fn();
  const { getByText } = render(
    <Results
      onPlayAgainPress={onPlayAgainPress}
      isDisabledButton={false}
      answers={{ question_1: 'False' }}
      questions={[MOCK_QUESTION]}
      score={1}
    />,
    {},
  );

  const playAgainButton = getByText(i18n.t('Results.playAgain'));
  expect(
    getByText('The Battle of Trafalgar took place on October 23rd, 1805'),
  ).toBeTruthy();
  expect(getByText('1/1')).toBeTruthy();
  expect(playAgainButton).toBeTruthy();
  fireEvent(playAgainButton, 'onPress');
  expect(onPlayAgainPress).toHaveBeenCalled();
});
