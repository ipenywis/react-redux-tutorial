import { ActionTypes } from "./constants";

export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
