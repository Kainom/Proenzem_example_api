import { Router } from "express";
import userController from "../controllers/UserController";
import UserLoginController from "../controllers/UserLoginController";
const router = Router();

router.post("/", userController.store);
router.post("/login", UserLoginController.store);



export default router;
