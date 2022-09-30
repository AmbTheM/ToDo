import express from "express";
import Authorization from "../../Middleware/Authorization";
import TaskDbController from "../../Persistance/Controllers/Task.db.controller";

const router = express.Router();

router.post("/create", Authorization, TaskDbController.createTask);
router.patch("/update/:taskID", Authorization, TaskDbController.updateTask);
router.post("/get", Authorization, TaskDbController.readAllTasks);
router.delete("/delete/:taskID", Authorization, TaskDbController.deleteTask);

export = router;
