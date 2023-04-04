import { FC, PropsWithChildren, useReducer } from "react";
import Context from "../context";
import { reducer } from "../reducer";
import { InitialStateType } from "../types";

const initialState: InitialStateType = {
  courses: [],
  dispatch: () => 0,
};

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
