import express from "express";
import { listIngredients, createIngredientController, getIngredientByIdController, deleteIngredientController, updateIngredientController} from "../controllers/ingredientsControllers.js";

const ingredientsRoutes = (app) => {
    app.use(express.json());

    app.get("/ingredientes", listIngredients);
    app.get("/ingrediente/:id", getIngredientByIdController);
    app.post("/ingrediente", createIngredientController);
    app.patch("/ingrediente/:id", updateIngredientController);
    app.delete("/ingrediente/:id", deleteIngredientController);
}

export default ingredientsRoutes;
