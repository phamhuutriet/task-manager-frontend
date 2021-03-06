import { FETCH_TASK, CREATE, UPDATE, DELETE } from "./actionsType";
import * as api from "../../api/index";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTask();
    dispatch({ type: FETCH_TASK, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);
    console.log(data);
    dispatch({ type: UPDATE, payload: data, isFetching: true, id: id });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);
    dispatch({ type: DELETE, payload: { id: id } });
  } catch (err) {
    console.log(err.message);
  }
};
