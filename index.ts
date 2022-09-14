import { TodoList } from "./Domain/Aggregates/TodoList";

const myList = new TodoList();
const date = new Date(Date.now());
myList.AddNewTask("help", "dfadsf", new Date(Date.now() + 172800000));
myList.AddNewTask("help", "dfadsf", new Date(Date.now() + 100));
myList.AddNewTask("help", "dfadsf", new Date(Date.now() + 12334));
const copy = myList.getList();

console.log(myList.getDetails(copy[0].id)._Name);
