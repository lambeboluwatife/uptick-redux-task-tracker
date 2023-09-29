const Task = ({ task, onToggle }) => {
  return (
    <div
      className={`task ${task.completed ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>{task.text}</h3>
      <h5>{task.description}</h5>
      <h6>{task.date}</h6>
    </div>
  );
};

export default Task;
