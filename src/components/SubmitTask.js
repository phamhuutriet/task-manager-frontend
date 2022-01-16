import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/actions/actions";

function SubmitTask() {
  const initialTask = {
    title: "",
    completed: false,
  };
  const [task, setTask] = useState(initialTask);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createTask(task));
    clear();
  };

  const clear = () => {
    setTask(initialTask);
  };

  return (
    <div>
      <h1>Create new task here</h1>
      <br></br>
      <input
        type="text"
        value={task.title}
        onChange={(e) => {
          setTask({ ...task, title: e.target.value });
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SubmitTask;
