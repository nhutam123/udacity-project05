import { CREATE_COURSE, DELETE_COURSE } from "../constants";
import { Course } from "../types";

export const createCourse = (payload: Course) => ({
  type: CREATE_COURSE,
  payload,
});

export const deleteCourse = (payload: Course) => ({
  type: DELETE_COURSE,
  payload,
});
