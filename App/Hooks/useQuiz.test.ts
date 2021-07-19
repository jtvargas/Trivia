import { renderHook, act } from '@testing-library/react-hooks';
import { useQuiz } from './useQuiz';

const MOCK_QUESTIONS = [
  {
    id: 'question_1',
    category: 'Vehicles',
    type: 'boolean',
    difficulty: 'hard',
    question: 'The term &quot;GTO&quot; was originated by Ferrari?',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    id: 'question_2',
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'The protagonist in &quot;Humanity Has Declined&quot; has no discernable name and is simply referred to as &#039;I&#039; for most of the series.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
];

test('should allow to save quiz answer and go to the next question', () => {
  const { result } = renderHook(() => useQuiz({ questions: MOCK_QUESTIONS }));

  // expect initial state
  expect(result.current.answers).toEqual({});
  expect(result.current.currentIndexQuestion).toEqual(0);

  // Set answer for first question
  act(() => {
    result.current.setAnswers('True');
  });

  //expect new state
  expect(result.current.answers).toEqual({ question_1: 'True' });
  expect(result.current.currentIndexQuestion).toEqual(1);
});

test('should allow to save quiz answer and save answers for different questions', () => {
  const { result } = renderHook(() => useQuiz({ questions: MOCK_QUESTIONS }));

  // expect initial state
  expect(result.current.answers).toEqual({});
  expect(result.current.currentIndexQuestion).toEqual(0);

  // Set answer for first question
  act(() => {
    result.current.setAnswers('True');
  });

  // expect new state
  expect(result.current.answers).toEqual({ question_1: 'True' });
  expect(result.current.currentIndexQuestion).toEqual(1);

  // Set answer for the second question
  act(() => {
    result.current.setAnswers('False');
  });

  // expect new state
  expect(result.current.answers).toEqual({
    question_1: 'True',
    question_2: 'False',
  });
  expect(result.current.currentIndexQuestion).toEqual(2);
});
