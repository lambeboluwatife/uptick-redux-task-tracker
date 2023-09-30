import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "./data/slice";
import EditTask from "./components/EditTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = await { id, ...task };
    dispatch(tasksActions.addTask(newTask));
  };

  // Select Task to Update
  const editTask = async (id) => {
    setShowAddTask(false);
    setIsEditing(true);
    setCurrentTask(tasksState.tasks.find((task) => task.id === id));
  };

  // Update Task
  const updateTask = async (id, updatedTask) => {
    dispatch(tasksActions.updateTask({ id, ...updatedTask }));
    setIsEditing(false);
  };

  // Delete Task
  const deleteTask = async (id) => {
    dispatch(tasksActions.deleteTask(id));
  };

  const toggleStatus = (id) => {
    dispatch(tasksActions.toggleStatus(id));
  };
  return (
    <>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {isEditing && (
          <EditTask
            currentTask={currentTask}
            isEditing={() => setIsEditing(!isEditing)}
            onUpdate={updateTask}
          />
        )}
        {tasksState.tasks.length > 0 ? (
          <Tasks
            tasks={tasksState.tasks}
            onToggle={toggleStatus}
            onEditClick={editTask}
            onDelete={deleteTask}
          />
        ) : (
          "No Tasks"
        )}
      </div>
    </>
  );
}

export default App;
