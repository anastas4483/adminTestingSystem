interface Attempt {
  id: number;
  start: string;
  timeSec: number;
  rightAnswers: number;
  allAnswers: number;
}

export interface User {
  name: string;
  id: number;
  attempts: Attempt[];
}
