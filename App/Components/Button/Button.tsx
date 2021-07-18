import React, { useMemo } from 'react';
import { Button as ButtonRNP, withTheme } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { Theme } from '../../Types';
import Text, { TextProps } from '../Text';

interface Props {
  label: string;
  theme: Theme;
  onPress: () => void;
  isFullWidth?: boolean;
  isUpperCase?: boolean;
  textProps?: Partial<TextProps>;
}

const Button = (props: Props) => {
  const {
    theme,
    onPress,
    label = 'Button',
    isFullWidth = false,
    isUpperCase = true,
    textProps,
  } = props;
  const { colors } = theme;

  const fullWidthStyleMemo = useMemo(() => {
    return isFullWidth ? styles.fullWidth : null;
  }, [isFullWidth]);

  return (
    <ButtonRNP
      mode="contained"
      onPress={onPress}
      contentStyle={[fullWidthStyleMemo]}
      color={colors.accent}
      uppercase={isUpperCase}
    >
      <Text {...textProps} label={label} />
    </ButtonRNP>
  );
};

const styles = ScaledSheet.create({
  fullWidth: {
    width: '100%',
  },
});

export default withTheme(Button);
