import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask, createTask } from "../redux/actions/actions";

function TasksList(props) {
  const dispatch = useDispatch();
  const tasks = props.tasks;

  return (
    <div>
      <ul>
        {tasks.map((task) =>
          task.completed == false ? (
            <li key={task.id}>
              {task.title}
              <Link to={`/edit/${task.id}`}>Edit</Link>
              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </li>
          ) : (
            dispatch(deleteTask(task.id))
          )
        )}
      </ul>
    </div>
  );
}

export default TasksList;
