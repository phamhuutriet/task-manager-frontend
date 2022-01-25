import { FETCH_TASK, CREATE, UPDATE, DELETE } from "../actions/actionsType";

export default (isFetching = false, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return false;
    case CREATE:
      return false;
    case DELETE:
      return false;
    case UPDATE:
      return action.isFetching;
    default:
      return false;
  }
};
