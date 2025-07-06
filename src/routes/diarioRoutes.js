import express from "express";
import {
  addDiarioController,
  // delReceitaController,
  listarDiarioController,
  // receitaByIdController,
  // updateReceitaController,
} from "../controllers/diarioController.js";

const receitaRoutes = (app) => {
  app.use(express.json());

  app.get("/diario/:id", listarDiarioController);
  app.post("/diario", addDiarioController);
  // app.patch("/receita/:id", updateReceitaController);
  // app.delete("/receita/:id", delReceitaController);
};

export default receitaRoutes;
