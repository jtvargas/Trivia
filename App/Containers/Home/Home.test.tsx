import React from 'react';
import { render, fireEvent } from '../../Utils/Test';
import { i18n } from '../../Core';
import Home from './Home';

it('should display the home layout and trigger on begin press when is not disabled', () => {
  const onBeginPress = jest.fn();
  const { getByText } = render(
    <Home
      onBeginPress={onBeginPress}
      isDisabledButton={false}
      isLoading={false}
    />,
    {},
  );

  const beginButton = getByText(i18n.t('Home.begin'));
  expect(beginButton).toBeTruthy();
  fireEvent(beginButton, 'onPress');
  expect(onBeginPress).toHaveBeenCalled();
});

it('should display the home layout and not trigger on begin press when is disabled', () => {
  const onBeginPress = jest.fn();
  const { getByText } = render(
    <Home
      onBeginPress={onBeginPress}
      isDisabledButton={true}
      isLoading={false}
    />,
    {},
  );

  const beginButton = getByText(i18n.t('Home.begin'));
  expect(beginButton).toBeTruthy();
  fireEvent(beginButton, 'onPress');
  expect(onBeginPress).not.toHaveBeenCalled();
});

it('should display the home layout and not trigger begin press when is loading the quiz questions ', () => {
  const onBeginPress = jest.fn();
  const { getByText } = render(
    <Home
      onBeginPress={onBeginPress}
      isDisabledButton={true}
      isLoading={true}
    />,
    {},
  );

  const beginButton = getByText(i18n.t('Home.begin'));
  expect(beginButton).toBeTruthy();
  fireEvent(beginButton, 'onPress');
  expect(onBeginPress).not.toHaveBeenCalled();
  expect(getByText(i18n.t('Home.loadingQuestions'))).toBeTruthy();
});
