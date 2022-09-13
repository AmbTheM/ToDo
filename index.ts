console.log("This is just the beginning my dudes");

import { TodoList } from "./Domain/Aggregates/List";

const myList = new TodoList();
const date = new Date(Date.now());
myList.AddNewTask("help", "dfadsf", new Date(Date.now() + 100000000));
myList.AddNewTask("help", "dfadsf", new Date(Date.now() + 100000000));
myList.AddNewTask("help", "dfadsf", new Date(Date.now() + 100000000));

console.log(myList.getList());
