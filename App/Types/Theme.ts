import { Fonts } from 'react-native-paper/lib/typescript/types';

type Theme = {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onSurface: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
  };
  fonts: Fonts;
  animation: {
    scale: number;
  };
};

type FontsConfig = {
  ios: Fonts;
  android: Fonts;
};

type FontSize = 'largeTitle' | 'title1' | 'title2' | 'title3' | 'body';

export type { Theme, FontsConfig, FontSize };
