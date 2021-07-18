import React from 'react';
import { render } from '../../Utils/Test';
import Text from './Text';

it('should render text label correctly', () => {
  const { getByText } = render(<Text label="hello" size={'title1'} />, {});
  expect(getByText('hello')).toBeDefined();
});
