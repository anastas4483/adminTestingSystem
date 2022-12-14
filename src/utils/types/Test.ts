export interface Answer {
  title: string;
  isRight?: boolean;
  answerId: number;
}
export interface Question {
  title: string;
  questionId: number;
  answers: Answer[];
}

export interface Test {
  id: number;
  isHide?: boolean;
  title: string;
  questions: Question[];
}
