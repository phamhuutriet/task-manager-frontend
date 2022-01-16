import axios from "axios";

const url = "http://localhost:3000/tasks";

export const fetchTask = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTask = (id, updatedTask) =>
  axios.patch(`${url}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
