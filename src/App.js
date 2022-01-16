import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTasks } from "./redux/actions/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksList from "./components/TasksList";
import SubmitTask from "./components/SubmitTask";
import EditTask from "./components/EditTask";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SubmitTask />
                <TasksList tasks={tasks} />
              </div>
            }
          />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
