import Dexie from "dexie";

export const db = new Dexie("taskTracker");
db.version(2).stores({
  tasks: "++id,text,description, priority, completed, date",
});
