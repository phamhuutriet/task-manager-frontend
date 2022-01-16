import { FETCH_TASK, CREATE, UPDATE, DELETE } from "../actions/actionsType";

export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_TASK:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case UPDATE:
      tasks = [...tasks];
      return tasks.map((task) =>
        task._id == action.id ? action.payload : task
      );
    case DELETE:
      return tasks.filter((task) => task._id != action.payload.id);
    default:
      return tasks;
  }
};
