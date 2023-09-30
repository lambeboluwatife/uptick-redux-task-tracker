import { useState } from "react";
import moment from "moment/moment";
import Notification from "./Notification";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const date = moment().format("MMM D, YYYY");
  const completed = false;

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setShowNotification(!showNotification);
      setNotificationText("Please add task title");
      setNotificationType("warning");
      return;
    }
    if (!description) {
      setShowNotification(!showNotification);
      setNotificationText("Please add task description");
      setNotificationType("warning");
      return;
    }
    if (!priority) {
      setShowNotification(!showNotification);
      setNotificationText("Please select priority");
      setNotificationType("warning");
      return;
    }

    onAdd({ text, description, priority, completed, date });

    setText("");
    setDescription("");
    setPriority("");
  };

  return (
    <>
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
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {" "}
            <option>Choose Priority</option>
            <option value="Important">Important</option>
            <option value="Not Important">Not Important</option>
          </select>
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
      {showNotification && (
        <Notification text={notificationText} type={notificationType} />
      )}
      {showNotification &&
        setTimeout(() => {
          setShowNotification(false);
        }, 3000)}
    </>
  );
};

export default AddTask;
