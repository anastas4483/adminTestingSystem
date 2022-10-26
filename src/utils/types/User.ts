export interface AttemptI {
  id: number;
  start: string;
  timeSec: number;
  rightAnswers: number;
  allAnswers: number;
}

export interface PassedTest{
  testId: number;
  attempts: AttemptI[];
}

export interface User {
  name: string;
  id: number;
  passedTests: PassedTest[]
  
}
