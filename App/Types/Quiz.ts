interface Question {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswer: string[];
}

interface Answer {
  [x: string]: boolean;
}

export { Question, Answer };
