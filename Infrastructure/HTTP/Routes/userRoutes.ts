import express from "express";
import Authorization from "../../Middleware/Authorization";
import UserDbController from "../../Persistance/Controllers/User.db.controller";

const router = express.Router();

router.post("/create", UserDbController.createUser);
router.put("/update/:userID", UserDbController.updateUser);
router.get("/get/:userID", UserDbController.readUser);
router.post("/login", UserDbController.findUser);
router.get("/get", UserDbController.readAllUsers);
router.delete("/delete/:userID", UserDbController.deleteUser);

export = router;
