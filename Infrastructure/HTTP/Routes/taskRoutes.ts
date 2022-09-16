import express from "express";
import TaskDbController from "../../Persistance/Controllers/Task.db.controller";

const router = express.Router();

router.post("/create", TaskDbController.createTask);
router.patch("/update/:taskID", TaskDbController.updateTask);
router.get("/get/:taskID", TaskDbController.readTask);
router.get("/getU/:userID", TaskDbController.readAllTasks);
router.delete("/delete/:taskID", TaskDbController.deleteTask);

export = router;
