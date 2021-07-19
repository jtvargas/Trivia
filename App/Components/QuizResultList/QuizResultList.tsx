import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import QuizResultItem from '../QuizResultItem';
import { Answer, Question } from '../../Types';

interface Props {
  answers: Answer;
  questions: Question[];
}
const QuizResultList = (props: Props) => {
  const { answers = {}, questions = [] } = props;

  const keyExtractor = useCallback(item => {
    return item.id;
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Question }) => {
      return (
        <View key={item.id}>
          <QuizResultItem
            isCorrect={answers[item.id] === item.correctAnswer}
            question={item.question}
          />
        </View>
      );
    },
    [answers],
  );

  return (
    <FlatList
      style={{ marginBottom: 30 }}
      data={questions}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // bounces={false}
      ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
    />
  );
};

export default QuizResultList;
