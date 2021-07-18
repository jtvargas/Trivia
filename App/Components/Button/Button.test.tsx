import React from 'react';
import { render, fireEvent } from '../../Utils/Test';
import Button from './Button';

it('should trigger on press when button is pressed', () => {
  const onPress = jest.fn();
  const { getByText } = render(
    <Button label={'Button'} onPress={onPress} />,
    {},
  );

  const button = getByText('Button');
  expect(button).toBeTruthy();
  fireEvent(button, 'onPress');
  expect(onPress).toHaveBeenCalled();
});
