import { NextFunction, Request, Response } from "express";
import UserDb from "../Models/User.db.model";

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { Username, Password, Email, id } = req.body;

  const user = new UserDb({
    _id: id,
    Username: Username,
    Password: Password,
    Email: Email,
  });

  return user
    .save()
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((error) => {
      console.log(error.code);
      if (error.code === 11000) {
        if (error.keyPattern.Username > 0) {
          res.status(400).json({ message: "Username Already Exists" });
        } else if (error.keyPattern.Email > 0) {
          res.status(400).json({ message: "Email Already Exists" });
        }
      } else {
        res.status(500).json({ error });
      }
    });
};

const readUser = (req: Request, res: Response, next: NextFunction) => {
  const userID = req.params.userID;

  return UserDb.findById(userID)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((error) => res.status(500).json({ error }));
};
const readAllUsers = (req: Request, res: Response, next: NextFunction) => {
  return UserDb.find()
    .then((user) => {
      user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "not found" });
    })
    .catch((error) => res.status(500).json({ error }));
};

const findUsername = (req: Request, res: Response, next: NextFunction) => {
  return UserDb.find({ Username: req.params.Username })
    .then((user) => {
      user.length !== 0
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "Username not found" });
    })
    .catch((error) => res.status(500).json({ error }));
};

const findEmail = (req: Request, res: Response, next: NextFunction) => {
  return UserDb.find({ Email: req.params.Email })
    .then((user) => {
      user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "Email not found" });
    })
    .catch((error) => res.status(500).json({ error }));
};

const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const userID = req.params.userID;

  UserDb.findById(userID)
    .then((user) => {
      if (user) {
        user.set(req.body);
        return user
          .save()
          .then((user) => {
            res.status(200).json({ user });
          })
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userID = req.params.userID;

  return UserDb.findByIdAndDelete(userID)
    .then((user) => {
      user
        ? res.status(201).json({ message: "Deleted Succesfully" })
        : res.status(404).json({ message: "not found" });
    })
    .catch()
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createUser,
  deleteUser,
  updateUser,
  readAllUsers,
  readUser,
  findUsername,
  findEmail,
};
