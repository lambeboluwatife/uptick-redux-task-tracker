import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, onToggle, onEditClick, onDelete }) => {
  return (
    <div
      className={`task ${task.completed ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}

        <FontAwesomeIcon
          icon={faRemove}
          style={{ float: "right", paddingLeft: "20px", color: "red" }}
          onClick={() => onDelete(task.id)}
        />

        <FontAwesomeIcon
          icon={faEdit}
          style={{ float: "right", color: "green" }}
          onClick={() => onEditClick(task.id)}
        />
      </h3>
      <h5>{task.description}</h5>
      <h6>{task.date}</h6>
      <h6
        className={`priority ${
          task.priority === "not important" ? "not-important" : ""
        }`}
      >
        {task.priority}
      </h6>
    </div>
  );
};

export default Task;
