import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/actions/actions";

function TasksList(props) {
  const dispatch = useDispatch();
  const tasks = props.tasks;

  return (
    <div>
      <ul>
        {tasks.map((task) =>
          task.completed == false ? (
            <li key={task._id}>
              {task.title}
              <Link to={`/edit/${task._id}`}>Edit</Link>
              <button onClick={() => dispatch(deleteTask(task._id))}>
                Delete
              </button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default TasksList;
