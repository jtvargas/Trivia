import React, { useMemo } from 'react';
import { Text as TextRNP, withTheme } from 'react-native-paper';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { Theme as ThemeType, FontSize } from '../../Types';
import { Theme } from '../../Core';

export interface Props {
  theme: ThemeType;
  medium?: boolean;
  regular?: boolean;
  light?: boolean;
  label: string;
  size: FontSize;
  color?: string;
  isUpperCase?: boolean;
  isCapitalize?: boolean;
}

const Text = (props: Props) => {
  const {
    theme,
    medium,
    regular,
    light,
    size = 'body',
    color,
    label = 'Text',
    isUpperCase = false,
    isCapitalize = false,
  } = props;
  const { fonts } = theme;

  const fontStyle = useMemo(() => {
    if (light) {
      return fonts.light;
    }

    if (medium) {
      return fonts.medium;
    }

    return fonts.regular;
  }, [light, regular, light]);

  const textSizeStyle = useMemo(() => {
    return { fontSize: scale(Theme.fontsSize[size]) };
  }, [size]);

  const textColorStyle = useMemo(() => {
    return { color: color || theme.colors.text };
  }, [color]);

  const textUpperCaseStyle = useMemo(() => {
    return isUpperCase ? styles.upperCase : null;
  }, [isUpperCase]);

  const textCapitalizeStyle = useMemo(() => {
    return isCapitalize ? styles.capitalize : null;
  }, [isCapitalize]);

  return (
    <TextRNP
      style={[
        fontStyle,
        textSizeStyle,
        textColorStyle,
        textCapitalizeStyle,
        textUpperCaseStyle,
      ]}
    >
      {label}
    </TextRNP>
  );
};

const styles = ScaledSheet.create({
  upperCase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});
export default withTheme(Text);
