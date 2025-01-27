import express from "express";
import userRoute from "./users.js";

const webRoute = express.Router();

webRoute.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

webRoute.use("/users", userRoute);

export default webRoute;
