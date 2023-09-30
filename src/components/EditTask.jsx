import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EditTask = ({ currentTask, isEditing, onUpdate }) => {
  const [text, setText] = useState(currentTask.text);
  const [description, setDescription] = useState(currentTask.description);
  const [priority, setPriority] = useState(currentTask.priority);

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

    onUpdate(currentTask.id, { text, description, priority });
  };

  return (
    <>
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
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {" "}
            <option>Choose Priority</option>
            <option value="important">Important</option>
            <option value="not important">Not Important</option>
          </select>
        </div>

        <input type="submit" value="Update Task" className="btn btn-block" />
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

export default EditTask;
