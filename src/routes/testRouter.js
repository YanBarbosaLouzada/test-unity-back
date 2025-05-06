import { Router } from "express";
import TestController from "../controllers/testController.js";

const testRouter = Router();

testRouter.post("/dados", TestController.postTest);

export default testRouter;