import express from "express";
import {
  createRecipeController,
  listRecipesController,
} from "../controllers/receitaController.js";

const recipesRoutes = (app) => {
  app.use(express.json());
  
  app.get("/receitas", listRecipesController);
  app.post("/receita", createRecipeController);
};

export default recipesRoutes;
