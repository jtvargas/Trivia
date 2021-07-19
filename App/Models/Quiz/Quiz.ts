import { createHash, decode } from '../../Utils';
import { Answer, Question, ResultAPI } from '../../Types';

const getQuestionId = ({
  question,
  difficulty,
  category,
}: {
  question: string;
  difficulty: string;
  category: string;
}) => {
  return createHash(`${question} ${difficulty} ${category}`);
};

const getQuestions = (results: Array<ResultAPI>): Question[] => {
  return results.map(result => {
    return {
      id: getQuestionId({
        question: result.question,
        difficulty: result.difficulty,
        category: result.category,
      }),
      category: result.category,
      type: result.type,
      difficulty: result.difficulty,
      question: decode(result.question),
      correctAnswer: result.correct_answer,
      incorrectAnswer: result.incorrect_answers,
    };
  }) as unknown as Question[];
};

const getScore = ({
  answers,
  questions,
}: {
  answers: Answer;
  questions: Question[];
}): number => {
  return questions.reduce((score: number, question) => {
    const questionId = question.id;
    const questionAnswer = answers[questionId];
    const correctAnswer = question.correctAnswer;

    return correctAnswer === questionAnswer ? score + 1 : score;
  }, 0);
};

export default {
  getQuestions,
  getScore,
};
