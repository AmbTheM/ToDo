import { TodoList } from "../Domain/Aggregates/TodoList";
import { Task } from "../Domain/Entities/Task.entity";

describe("Test if finish task function works", () => {
  const myList: TodoList = new TodoList();
  myList.AddNewTask(
    "Get some groceries",
    "Go to local shop and buy some onions and milk",
    new Date(Date.now() + 86400000)
  );
  let listoftask = myList.getList();
  myList.FinishTask(listoftask[0].id);
  listoftask = myList.getList();

  it("Should return as finished", () => {
    expect(listoftask[0].getIsFinished()).toBeTruthy;
  });
});
