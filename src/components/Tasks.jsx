import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onToggle }) => {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Tasks;
