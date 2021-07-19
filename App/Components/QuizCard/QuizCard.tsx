import React from 'react';
import { View, ScrollView } from 'react-native';
import { withTheme } from 'react-native-paper';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { Theme } from '../../Core';
import { Theme as ThemeType } from '../../Types';
import Text from '../Text';

interface Props {
  theme: ThemeType;
  question: string;
}

const CARD_HEIGHT = scale(284);
const BORDER_RADIUS = scale(25);

const QuizCard = (props: Props) => {
  const { question } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Text
          label={question}
          color={'black'}
          textAlignment={'center'}
          size={'body'}
        />
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Theme.colors.background,
    height: CARD_HEIGHT,
    width: '100%',
    borderRadius: BORDER_RADIUS,
    alignContent: 'center',
    justifyContent: 'center',
    ...Theme.spacers.PA_5,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default withTheme(QuizCard);
