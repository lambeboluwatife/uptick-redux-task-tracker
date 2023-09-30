import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EditTask = ({ currentTask, isEditing, onUpdate }) => {
  const [text, setText] = useState(currentTask.text);
  const [description, setDescription] = useState(currentTask.description);
  const [priority, setPriority] = useState(currentTask.priority);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    if (!description) {
      alert("Please add a description");
      return;
    }
    if (!priority) {
      alert("Please choose priority");
      return;
    }

    onUpdate(currentTask.id, { text, description, priority });
  };

  return (
    <form className="update-form" onSubmit={onSubmit}>
      <h5 style={{ textAlign: "center" }}>Edit Birthday</h5>
      <div className="form-control">
        <label>
          Task
          <FontAwesomeIcon
            icon={faRemove}
            style={{ color: "red", float: "right", cursor: "pointer" }}
            onClick={isEditing}
          />
        </label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {" "}
          <option>Choose Priority</option>
          <option value="important">Important</option>
          <option value="not important">Not Important</option>
        </select>
      </div>

      <input type="submit" value="Update Task" className="btn btn-block" />
    </form>
  );
};

export default EditTask;
