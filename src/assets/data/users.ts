import { User } from "../../utils/types/User";

export const users: User[] = [
  {
    id: 0,
    name: "Дженифер Энистон",
    passedTests: [
      {
        testId: 0,
        attempts: [
          {
            id: 0,
            start: "2020-05-12T23:50:21.817Z",
            timeSec: 2345678,
            rightAnswers: 5,
            allAnswers: 6,
          },
          {
            id: 1,
            start: "2021-07-10T12:05:21.817Z",
            timeSec: 44555,
            rightAnswers: 2,
            allAnswers: 8,
          },
          {
            id: 2,
            start: "2022-09-04T07:45:21.817Z",
            timeSec: 78445,
            rightAnswers: 5,
            allAnswers: 6,
          },
          {
            id: 3,
            start: "2021-09-03T09:15:21.817Z",
            timeSec: 787845,
            rightAnswers: 6,
            allAnswers: 6,
          },
        ],
      },
      {
        testId: 1,
        attempts: [
          {
            id: 2,
            start: "2022-07-02T12:25:21.817Z",
            timeSec: 7857,
            rightAnswers: 8,
            allAnswers: 8,
          },
          {
            id: 4,
            start: "2022-08-03T09:47:21.817Z",
            timeSec: 787845,
            rightAnswers: 6,
            allAnswers: 8,
          },
        ],
      },
      {
        testId: 2,
        attempts: [
          {
            id: 3,
            start: "2022-08-03T05:12:21.817Z",
            timeSec: 7854,
            rightAnswers: 2,
            allAnswers: 8,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Кортни Кокс",
    passedTests: [
      {
        testId: 1,
        attempts: [
          {
            id: 0,
            start: "2022-06-06T12:48:21.817Z",
            timeSec: 1234,
            rightAnswers: 3,
            allAnswers: 8,
          },
          {
            id: 1,
            start: "2022-07-10T14:08:21.817Z",
            timeSec: 787,
            rightAnswers: 6,
            allAnswers: 8,
          },
          {
            id: 2,
            start: "2022-08-012T16:25:21.817Z",
            timeSec: 99,
            rightAnswers: 2,
            allAnswers: 8,
          },
        ],
      },
      {
        testId: 2,
        attempts: [
          {
            id: 3,
            start: "2022-08-12T16:50:50.817Z",
            timeSec: 758445,
            rightAnswers: 2,
            allAnswers: 8,
          },
          {
            id: 4,
            start: "2022-09-04T07:45:21.817Z",
            timeSec: 78445,
            rightAnswers: 6,
            allAnswers: 8,
          },
          {
            id: 5,
            start: "2022-09-04T08:25:21.817Z",
            timeSec: 424,
            rightAnswers: 1,
            allAnswers: 7,
          },
        ],
      },
    ],
  },
];
