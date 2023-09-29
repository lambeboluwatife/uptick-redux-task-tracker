import { useState } from "react";
import moment from "moment/moment";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const date = moment().format("MMM D, YYYY");

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
      alert("Please add a description");
      return;
    }

    onAdd({ text, description, priority, date });

    setText("");
    setDescription("");
    setPriority("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
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

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
