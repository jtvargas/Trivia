import React from 'react';
import { render } from '../../Utils/Test';
import QuizCard from './QuizCard';

const QUESTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

it('should render the question correctly', () => {
  const { getByText } = render(<QuizCard question={QUESTION} />, {});

  expect(getByText(QUESTION)).toBeTruthy();
});
