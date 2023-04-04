import { createContext, Dispatch } from "react";
import { Action } from "../types";
import { Course } from "../types";

const Context = createContext<[Course[], Dispatch<Action>]>([[], () => 0]);

export default Context;
