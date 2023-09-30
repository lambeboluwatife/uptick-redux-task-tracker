import moment from "moment/moment";

const tasks = [
  {
    id: 1,
    text: "Groceries",
    description: "Go to the supermarket to get groceries needed at home",
    priority: "important",
    completed: false,
    date: moment().format("MMM D, YYYY"),
  },
  {
    id: 2,
    text: "Laundry",
    description: "Go do the laundry by 3pm",
    priority: "not important",
    completed: false,
    date: moment().format("MMM D, YYYY"),
  },
];

export default tasks;
