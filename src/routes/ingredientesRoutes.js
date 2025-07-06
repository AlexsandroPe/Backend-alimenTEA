import express from "express";
import { listarIngredientes, createIngrediente, listarIngredientePorID, delIngredController, updateIngredienteController} from "../controllers/ingredientesControllers.js";

const ingredienteRoutes = (app) => {
    app.use(express.json());

    app.get("/ingredientes", listarIngredientes);
    app.get("/ingrediente/:id", listarIngredientePorID);
    app.post("/ingrediente", createIngrediente);
    app.patch("/ingrediente/:id", updateIngredienteController);
    app.delete("/ingrediente/:id", delIngredController);
}

export default ingredienteRoutes;
