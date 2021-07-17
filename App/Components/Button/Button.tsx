import React from 'react';
import { Button as ButtonRNP } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

const Button = props => {
  const { colors } = props.theme;
  return <ButtonRNP {...props} color={colors.accent} />;
};

export default withTheme(Button);
