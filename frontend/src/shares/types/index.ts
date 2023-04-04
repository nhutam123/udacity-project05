import { ReactElement } from "react";

export type RouterType = {
  path: string;
  component: () => ReactElement;
  layout?: (props: any) => ReactElement;
};

export type Student = {
  id: number;
  name: string;
  email: string;
};
