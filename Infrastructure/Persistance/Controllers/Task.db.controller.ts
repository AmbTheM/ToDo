import { NextFunction, Request, Response } from "express";
import TaskDb from "../Models/Task.db.model";
const createTask = (req: Request, res: Response, next: NextFunction) => {
  const {
    TaskName,
    TaskDescription,
    CreatedAt,
    Deadline,
    FinishedAt,
    UserId,
    id,
  } = req.body;

  const task = new TaskDb({
    TaskName,
    TaskDescription,
    CreatedAt,
    Deadline,
    FinishedAt,
    UserId,
    _id: id,
  });

  return task
    .save()
    .then((task) => {
      res.status(200).json({ task });
    })
    .catch((error) => res.status(500).json({ error }));
};

const readTask = (req: Request, res: Response, next: NextFunction) => {
  const taskID = req.params.taskID;

  return TaskDb.findById(taskID)
    .then((task) => {
      res.status(200).json({ task });
    })
    .catch((error) => res.status(500).json({ error }));
};
const readAllTasks = (req: Request, res: Response, next: NextFunction) => {
  return TaskDb.find({ UserId: req.params.userID })
    .then((task) => {
      task
        ? res.status(200).json({ task })
        : res.status(404).json({ message: "not found" });
    })
    .catch((error) => res.status(500).json({ error }));
};

const updateTask = (req: Request, res: Response, next: NextFunction) => {
  const taskID = req.params.taskID;

  TaskDb.findById(taskID)
    .then((task) => {
      if (task) {
        task.set(req.body);
        return task
          .save()
          .then((task) => {
            res.status(200).json({ task });
          })
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  const taskID = req.params.taskID;

  return TaskDb.findByIdAndDelete(taskID)
    .then((task) => {
      task
        ? res.status(201).json({ message: "Deleted Succesfully" })
        : res.status(404).json({ message: "not found" });
    })
    .catch()
    .catch((error) => res.status(500).json({ error }));
};

export default { createTask, deleteTask, updateTask, readAllTasks, readTask };
