import express from "express";
import { listIngredients, createIngredientController, getIngredientByIdController, deleteIngredientController, updateIngredientController} from "../controllers/ingredientsControllers.js";

const router = express.Router();

    router.get("/", listIngredients);
    router.get("/:id", getIngredientByIdController);
    router.post("/", createIngredientController);
    router.patch("/:id", updateIngredientController);
    router.delete("/:id", deleteIngredientController);

export default router;
