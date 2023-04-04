import { Course } from "../types";

type Action = {
  type: string;
  payload: Course;
};

export const reducer = (state: any, acction: Action) => {
  switch (acction.type) {
    case "CREATE_COURSE":
      return [
        ...state,
        {
          id: acction.payload.id,
          name: acction.payload.name,
          price: acction.payload.price,
          description: acction.payload.description,
        },
      ];
    case "DELETE_COURSE":
      return [
        ...state.filter((course: any) => course.id !== acction.payload.id),
      ];
    default:
      return state;
  }
};
