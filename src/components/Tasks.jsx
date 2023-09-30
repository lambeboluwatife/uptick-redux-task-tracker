import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";

const Tasks = ({ tasks, onToggle, onEditClick, onDelete }) => {
  const [showTasks, setShowTasks] = useState(true);
  const [showPendingTasks, setShowPendingTasks] = useState(false);

  const completedTasks = tasks.filter((task) => task.completed === true);
  const pendingTasks = tasks.filter((task) => task.completed === false);

  return (
    <>
      <h3>Completed Tasks</h3>
      {completedTasks.length > 0
        ? completedTasks.map((task) => (
            <div
              className={`task ${task.completed ? "reminder" : ""}`}
              key={task.id}
            >
              <h3>
                {task.text}{" "}
                <FontAwesomeIcon
                  icon={faRemove}
                  style={{ float: "right", paddingLeft: "20px", color: "red" }}
                  onClick={() => onDelete(task.id)}
                />
              </h3>
              <h5>{task.description}</h5>
              <h6>{task.date}</h6>
              <h6>{task.priority}</h6>
            </div>
          ))
        : "No Completed Task"}
      <h6 style={{ margin: "1rem 0" }}>Double Click Task to change status</h6>
      <button className="all-tasks" onClick={() => setShowTasks(!showTasks)}>
        All Tasks
      </button>
      {showTasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEditClick={onEditClick}
            onToggle={onToggle}
            showTasks={showTasks}
            onDelete={onDelete}
          />
        ))}
      <button
        className="pending-tasks"
        onClick={() => setShowPendingTasks(!showPendingTasks)}
      >
        Pending Tasks
      </button>
      {showPendingTasks &&
        pendingTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEditClick={onEditClick}
            onToggle={onToggle}
            showTasks={showTasks}
            onDelete={onDelete}
          />
        ))}
    </>
  );
};

export default Tasks;
