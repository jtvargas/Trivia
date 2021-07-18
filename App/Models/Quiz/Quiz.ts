import { createHash, decode } from '../../Utils';
import { Question, ResultAPI } from '../../Types';

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

export default {
  getQuestions,
};
