import express from "express";
import UserDbController from "../../Persistance/Controllers/User.db.controller";

const router = express.Router();

router.post("/create", UserDbController.createUser);
router.patch("/update/:userID", UserDbController.updateUser);
router.get("/get/:userID", UserDbController.readUser);
router.get("/get", UserDbController.readAllUsers);
router.delete("/delete/:userID", UserDbController.deleteUser);

export = router;
