import { Dispatch } from "react";

export type Course = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type InitialStateType = {
  courses: Course[];
  dispatch: Dispatch<Action>;
};

export type Action = {
  type: string;
  payload: Course;
};
