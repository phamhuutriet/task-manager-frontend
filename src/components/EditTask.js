import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateTask } from "../redux/actions/actions";
import { Link } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const [currentTask, setCurrentTask] = useState({
    title: "",
    completed: false,
  });
  const task = useSelector((state) =>
    state.task.find((task) => task._id == id)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) setCurrentTask(task);
  }, []);

  const onChangeCheckBox = () => {
    setCurrentTask({ ...task, completed: true });
  };

  const handleSubmit = () => {
    dispatch(updateTask(id, currentTask));
  };

  console.log(currentTask);

  return (
    <div>
      <div>
        <h2>Edit Task</h2>
        <h3>Task ID: {id}</h3>
        {typeof currentTask != "undefined" ? (
          <div>
            <h3>Task Name: {currentTask.title}</h3>
            <input
              type="checkbox"
              checked={currentTask.complete}
              onChange={onChangeCheckBox}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <h3>Loading</h3>
        )}
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default EditTask;
