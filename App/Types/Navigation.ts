import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Results: { answers: Array<unknown> };
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;
type ResultsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Results'
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  QuizScreenNavigationProp,
  ResultsScreenNavigationProp,
};
