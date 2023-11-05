export type Test = {
  _id: string;
  testId: string;
  title: string;
  description: string;
  questions: {
    questionId: string;
    text: string;
    options: string[];
  }[];
  plan: string;
  completed_by: {
    user: string;
    mark: string;
    answers: string[];
    status: string;
    _id: string;
  }[];
};

export type ApiResponse = {
  data: Test[];
};
