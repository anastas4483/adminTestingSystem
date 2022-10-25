import { AttemptI } from "../types/User";

export const getAttemptStatistics = (attempts: AttemptI[]) => {
  const data = attempts.reduce(
    (data, attempt) => {
      if (attempt.allAnswers === attempt.rightAnswers) data.successfullyTests++;
      data.rate += attempt.rightAnswers / attempt.allAnswers;
      return data;
    },
    {
      successfullyTests: 0,
      rate: 0,
    }
  );

  return {
    totalAttempts: attempts.length,
    successfullyPercentage: (
      (data.successfullyTests / attempts.length) *
      100
    ).toFixed(1),
    successfullyTests: data.successfullyTests,
    GPA: data.rate / attempts.length,
  };
};
