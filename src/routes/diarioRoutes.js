import express from "express";
import {
  createDiaryController,
  listDiaryController,
} from "../controllers/diarioController.js";

const router = express.Router();

  router.get("/:id", listDiaryController);
  router.post("/", createDiaryController);

export default router;
