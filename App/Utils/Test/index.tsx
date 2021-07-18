// test-utils.js
import { render, fireEvent } from '@testing-library/react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { I18nextProvider } from 'react-i18next';
import { i18n, Theme } from '../../Core';
import React from 'react';
import { configureFonts } from '../index';
import { FontsConfig } from '../../Types';

const paperTheme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    ...Theme.colors,
  },
  fonts: configureFonts(Theme.fonts as FontsConfig),
};

// @ts-ignore
const AllTheProviders = ({ children }) => {
  return (
    <PaperProvider theme={paperTheme}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </PaperProvider>
  );
};

// @ts-ignore
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render, fireEvent };
