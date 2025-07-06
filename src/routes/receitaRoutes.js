import express from "express";
import {
  addReceitaController,
  // delReceitaController,
  listarReceitasController,
  // receitaByIdController,
  // updateReceitaController,
} from "../controllers/receitaController.js";

const receitaRoutes = (app) => {
  app.use(express.json());
  app.get("/receitas", listarReceitasController);
  // app.get("/receita/:id", receitaByIdController);
  app.post("/receita", addReceitaController);
  // app.patch("/receita/:id", updateReceitaController);
  // app.delete("/receita/:id", delReceitaController);
};

export default receitaRoutes;
