import { createRecipe, getRecipes } from "../models/receitaModel.js";

export async function listRecipesController(req, res) {
  try {
    const recipes = await getRecipes();
   if(recipes.length == 0) {
    res.status(204).json("No recipes")
    return recipes;
   } else {
    res.status(200).json(recipes)
    return recipes;
   }

  } catch (error) {
    console.error(error);
    res.status(404).send("Couldn't find the recipes");
  }
}


export async function createRecipeController(req, res) {
  try {
    const recipeData = req.body;

    const recipeResult = await createRecipe({
      name: recipeData.name,
      description: recipeData.description,
      preparationMethod: recipeData.preparationMethod
    });

    res.status(201).json({ message: "Recipe created successfully" });
  } catch (error) {
    console.error("Error creating recipe: ", error);
    res.status(400).send("It wasn't possible to create the recipe");
  }
}

// export async function updateReceitaController(req, res) {
//   try {
//     const ingID = Number(req.params.id);
//     const ingredienteDataUpd = req.body;
//     const retUp = await updateReceitaModel(ingredienteDataUpd, ingID);
//     res.status(200).send("Atualizado!!");
//   } catch (error) {
//     console.log("Erro no controller: ", error.message);
//     res.status(400).send("Erro no controller");
//   }
// }

// export async function delReceitaController(req, res) {
//   try {
//     const ingID = req.params.id;
//     const ret = await delReceitaModel(ingID);
//     console.log(ret);
//     res.status(200).send("Ingrediente deletado com sucesso!");
//   } catch (error) {
//     console.log("Erro no controller: ", error);
//   }
// }
