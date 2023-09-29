import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onToggle }) => {
  const [showTasks, setShowTasks] = useState(false);
  const [showPendingTasks, setShowPendingTasks] = useState(false);

  const completedTasks = tasks.filter((task) => task.completed === true);
  const pendingTasks = tasks.filter((task) => task.completed === false);

  return (
    <>
      <h3>Completed Tasks</h3>
      {completedTasks.length > 0
        ? completedTasks.map((task) => <Task key={task.id} task={task} />)
        : "No Completed Task"}
      <button className="all-tasks" onClick={() => setShowTasks(!showTasks)}>
        All Tasks
      </button>
      {showTasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={onToggle}
            showTasks={showTasks}
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
            onToggle={onToggle}
            showTasks={showTasks}
          />
        ))}
    </>
  );
};

export default Tasks;
