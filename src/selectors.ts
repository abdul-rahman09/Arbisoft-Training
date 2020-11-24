import { createSelector } from "reselect";
import { TODO_STATUS } from "components/models";
const todoSelector = (state) => state.todos.data;

export const todosWithPending = createSelector([todoSelector], (todos) => {
  return todos.filter((item) => item.state === TODO_STATUS.PENDING);
});

export const todosWithDone = createSelector([todoSelector], (todos) => {
  return todos.filter((item) => item.state === TODO_STATUS.DONE);
});
