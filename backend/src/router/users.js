import express from "express";
import UserController from "../controller/UserController.js";

const userRoute = express.Router();
const uInstance = new UserController();

userRoute.get("/", uInstance.index);
userRoute.post("/", uInstance.store);
userRoute.get("/:id", uInstance.show);
userRoute.delete("/:id", uInstance.delete);
userRoute.put("/:id", uInstance.update);

export default userRoute;
