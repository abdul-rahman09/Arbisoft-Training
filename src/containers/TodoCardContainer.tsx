import { connect } from "react-redux";
import { getTodos, postTodos, closePressedTodo } from "store/actions/index";
import { RootState } from "store/reducer/index";
import { TODO_STATUS } from "components/models";
import Card from "components/Card";
import { todosWithPending } from "selectors";
const stateToProps = (state: RootState) => {
  return {
    title: "Todo",
    todos: todosWithPending(state),
    visibilityFilter: TODO_STATUS.PENDING,
  };
};
const mapDispatchToProps = {
  getData: getTodos,
  postData: postTodos,
  closePressed: closePressedTodo,
};
export default connect(stateToProps, mapDispatchToProps)(Card);
