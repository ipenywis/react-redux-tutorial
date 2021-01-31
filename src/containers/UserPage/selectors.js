import { createSelector } from "reselect";

const userPageState = (state) => state.userPage;

export const makeSelectUser = createSelector(
  userPageState,
  (userPage) => userPage.user
);
