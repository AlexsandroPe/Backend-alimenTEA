import express from "express";
import {
  createRecipeController,
  listRecipesController,
} from "../controllers/receitaController.js";

const router = express.Router();

  router.get("/", listRecipesController);
  router.post("/", createRecipeController);

export default router;
