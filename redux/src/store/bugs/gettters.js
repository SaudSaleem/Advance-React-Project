import { createSelector } from "reselect";

export const getUnresolvedBugs = (state) =>
  state.entities.bugs.filter((bug) => bug.resolved === false);

//Memoization
//bugs => get unresolved bugs from cache
//benefits of using this technique is that,, it not recalculate everytime a same computed proprty
export const getUnresolvedBugsFromCache = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => bug.resolved === false)
);

//get bug by user id
export const getUserBug = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
