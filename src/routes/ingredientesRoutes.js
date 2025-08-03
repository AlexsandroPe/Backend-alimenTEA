import express from "express";
import { listIngredients, createIngredientController, getIngredientByIdController, deleteIngredientController, updateIngredientController} from "../controllers/ingredientsControllers.js";
import tokenVerify from "../middleware/tokenverify.js"
const router = express.Router();

    router.get("/", tokenVerify, listIngredients);
    router.get("/:id",  getIngredientByIdController);
    router.post("/", createIngredientController);
    router.patch("/:id", updateIngredientController);
    router.delete("/:id", deleteIngredientController);

export default router;
