import React from 'react';
import { render } from '../../Utils/Test';
import QuizResultItem from './QuizResultItem';

const QUESTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
it('should render the question and icon correctly if the answer is correct', () => {
  const { getByText, getByTestId } = render(
    <QuizResultItem question={QUESTION} isCorrect={true} />,
    {},
  );

  expect(getByText(QUESTION)).toBeTruthy();
  expect(getByTestId(`ICON_add_ID`)).toBeTruthy();
});

it('should render the question and icon correctly if the answer is wrong', () => {
  const { getByText, getByTestId } = render(
    <QuizResultItem question={QUESTION} isCorrect={false} />,
    {},
  );

  expect(getByText(QUESTION)).toBeTruthy();
  expect(getByTestId(`ICON_close_ID`)).toBeTruthy();
});
