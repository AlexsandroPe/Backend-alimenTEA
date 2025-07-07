import express from "express";
import {
  createDiaryController,
  listDiaryController,
} from "../controllers/diarioController.js";

const diaryRoutes = (app) => {
  app.use(express.json());

  app.get("/diario/:id", listDiaryController);
  app.post("/diario", createDiaryController);
};

export default diaryRoutes;
