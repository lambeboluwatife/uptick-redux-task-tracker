import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "./data/slice";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = await { id, ...task };
    dispatch(tasksActions.addTask(newTask));
  };

  const toggleStatus = (id) => {
    const taskToToggle = tasks.map((task) => id === task.id);
    console.log(taskToToggle);
    const updateTask = { ...taskToToggle, completed: !taskToToggle.completed };

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: updateTask.completed } : task
      )
    );
  };
  return (
    <>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasksState.tasks.length > 0 ? (
          <Tasks tasks={tasksState.tasks} onToggle={toggleStatus} />
        ) : (
          "No Tasks"
        )}
      </div>
    </>
  );
}

export default App;
