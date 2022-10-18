import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const Authorization = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);
  jwt.verify(
    token,
    "Secuewq0r8i3yu425tr89ghsdcheOUT-92134YT0NW",
    (err, user) => {
      if (err) return res.sendStatus(403);
      req.body.userID = user;
      next();
    }
  );
};

export default Authorization;
