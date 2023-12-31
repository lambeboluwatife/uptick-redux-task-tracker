import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Notification from "./components/Notification";

import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "./data/slice";
import EditTask from "./components/EditTask";

import { db } from "./dexie";
import { useLiveQuery } from "dexie-react-hooks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const tasksFromDB = useLiveQuery(() => db.tasks.reverse().toArray(), []);

  useEffect(() => {
    dispatch(tasksActions.getTasks(tasksFromDB));
  }, [tasksFromDB]);

  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const addTask = async (task) => {
    const { text, description, priority, completed, date } = task;

    const newTask = { text, description, priority, completed, date };

    await db.tasks.add(newTask);

    dispatch(tasksActions.addTask(newTask));
    setShowAddTask(false);
    setShowNotification(!showNotification);
    setNotificationText("Task Added");
    setNotificationType("success");
  };

  // Select Task to Update
  const editTask = async (id) => {
    setShowAddTask(false);
    setIsEditing(true);
    setCurrentTask(tasks.tasks.find((task) => task.id === id));
  };

  // Update Task
  const updateTask = async (id, updatedTask) => {
    db.tasks.update(id, updatedTask).then(function (updated) {
      if (updated) {
        dispatch(tasksActions.updateTask({ id, ...updatedTask }));
        setShowNotification(!showNotification);
        setNotificationText("Task Updated");
        setNotificationType("success");
      }
    });
    setIsEditing(false);
  };

  const toggleStatus = (id) => {
    const taskToToggle = tasks.tasks.find((task) => task.id == id);
    const completed = taskToToggle.completed;

    db.tasks.update(id, { completed: !completed }).then(() => {
      dispatch(tasksActions.toggleStatus(id));
      setShowNotification(!showNotification);
      setNotificationText("Task Status Changed");
      setNotificationType("success");
    });
  };

  // Delete Task
  const deleteTask = async (id) => {
    db.transaction("rw", db.tasks, function () {
      db.tasks.delete(id);
      dispatch(tasksActions.deleteTask(id));
      setShowNotification(!showNotification);
      setNotificationText("Task Deleted");
      setNotificationType("error");
    }).catch((err) => {
      alert(err);
      throw err;
    });
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
        {!tasks.tasks ? (
          <div>Loading....</div>
        ) : (
          <>
            {tasks.tasks?.length > 0 ? (
              <Tasks
                tasks={tasks.tasks}
                onToggle={toggleStatus}
                onEditClick={editTask}
                onDelete={deleteTask}
              />
            ) : (
              "No Tasks"
            )}
          </>
        )}
      </div>
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

export default App;
