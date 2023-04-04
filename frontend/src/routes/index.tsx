import LoginPage from "../pages/Login";
import StudentPage from "../pages/students";
import CoursePage from "../pages/courses";
import { RouterType } from "../shares/types";
import CreateStudentPage from "../pages/create_student";
import EditStudentPage from "../pages/edit_student";

export const publicRoutes: RouterType[] = [
  { path: "/login", component: LoginPage },
  { path: "/students", component: StudentPage },
];
export const privateRoutes: RouterType[] = [
  { path: "/courses", component: CoursePage },
  { path: "/create", component: CreateStudentPage },
  { path: "/edit", component: EditStudentPage },
];
