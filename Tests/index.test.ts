import { TaskDbAdapter } from "../Adapters/Task.DB.adapter";
import { UserDbAdapter } from "../Adapters/User.DB.adapter";
import { TodoList } from "../Domain/Aggregates/TodoList";
import { Task } from "../Domain/Entities/Task.entity";
import { User } from "../Domain/Entities/User.entity";
import { Email } from "../Domain/ValueObjects/Email.obj";
import { ITask } from "../DTO/Task.DTO";
import { IUser } from "../DTO/User.DTO";

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

describe("Check if email verification works", () => {
  it("should throw an error", () => {
    let myMail: Email;
    expect(() => {
      myMail = new Email("idfhjdi");
    }).toThrowError("Invalid Email");
  });

  it("should save the email", () => {
    let myMail: Email = new Email("heheheah@gmail.com");
    expect(myMail.value).toBe("heheheah@gmail.com");
  });
});

describe("Ccheck if Databse works correctly", () => {
  it("Should match the sample provided", async () => {
    const myDb = new UserDbAdapter();
    const data = await myDb.readFromDb("547ebbef-b626-43e9-acfe-5102e705503b");

    const user: User = new User(
      data.Username,
      data.Password,
      "jimin@jimin",
      data._id
    );

    expect(user.id).toBe("547ebbef-b626-43e9-acfe-5102e705503b");
  });

  it("Should place into database succesfully", async () => {
    const myDb = new TaskDbAdapter();
    const myTask: Task = new Task(
      "Buy boba tea asap",
      "quench your thirst boy",
      new Date(2400000)
    );
    const obj: ITask = {
      TaskName: myTask.getTaskDetails().Name,
      TaskDescription: myTask.getTaskDetails().Description,
      CreatedAt: myTask.getTaskDates().CreatedAt,
      Deadline: myTask.getTaskDates().Deadline,
      FinishedAt: myTask.getTaskDates().FinishedAt,
      UserId: "547ebbef-b626-43e9-acfe-5102e705503b",
      id: myTask.ID,
    };
    await myDb.saveToDb(obj);

    const data = await myDb.readFromDb(myTask.ID);

    expect(data.TaskName).toBe(myTask.getTaskDetails().Name);
  });
});
