import { getIngredient, createIngredient, deleteIngredient, updateIngredientModel, getIngredientByID } from "../models/ingredientesModel.js";

export async function listIngredients(req, res) {
  try {
    const ingredients = await getIngredient();
    console.log(ingredients);
    res.status(200).send(ingredients);
  } catch (error) {
    console.error(error);
    res.status(404).send("Unable to find ingredients");
  }
}

export async function getIngredientByIdController(req, res) {
  try {
    const ingredient = await getIngredientByID(req.params.id);
    res.status(200).json(ingredient);
  } catch (error) {
    console.error("Error fetching ingredient by ID: ", error);
    res.status(404).send("Ingredient not found");
  }
}

export async function createIngredientController(req, res) {
  try {
    const ingredientData = req.body;
    console.log(ingredientData);
    
    await createIngredient({
      name: ingredientData.name,
      category: ingredientData.category[0],
      industrialized: false,
      gluten: ingredientData.gluten,
      lactose: ingredientData.lactose,
      isActive: true
    });

    res.status(201).json({ message: "Ingredient successfully created" });
  } catch (error) {
    console.error("Error creating ingredient: ", error);
    res.status(400).send("Unable to create ingredient: CONTROLLER ERROR");
  }
}

export async function updateIngredientController(req, res) {
  try {
    const ingredientID = Number(req.params.id);
    const updatedData = req.body;
    await updateIngredientModel(updatedData, ingredientID);
    res.status(200).send("Ingredient updated!");
  } catch (error) {
    console.error("Error updating ingredient: ", error.message);
    res.status(400).send("Error updating ingredient");
  }
}

export async function deleteIngredientController(req, res) {
  try {
    const ingredientID = req.params.id;
    const result = await deleteIngredient(ingredientID);
    console.log(result);
    res.status(200).send("Ingredient deleted successfully!");
  } catch (error) {
    console.error("Error deleting ingredient: ", error);
    res.status(400).send("Error deleting ingredient");
  }
}
