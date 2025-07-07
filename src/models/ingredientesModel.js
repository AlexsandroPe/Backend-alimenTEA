import connection from "../config/db.js";

export async function getIngredient() {
  try {
    const [rows] = await connection.query("SELECT id, nome, categoria FROM alimentos");
    return rows;
  } catch (error) {
    console.error("Error fetching ingredients: ", error.message);
  }
}

export async function getIngredientByID(id) {
  try {
    const ingredientID = Number(id);
    const [result] = await connection.query(
      "SELECT * FROM ingredientes WHERE id = ?",
      [ingredientID]
    );
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching ingredient by ID: ", error.message);
  }
}

export async function createIngredient({ name, category, industrialized, gluten, lactose, isActive }) {
  try {
    const result = await connection.query(
      "INSERT INTO alimentos(nome, categoria, industrializado, gluten, lactose, ativo) VALUES (?, ?, ?, ?, ?, ?)",
      [name, category, industrialized, gluten, lactose, isActive]
    );
    console.table("Ingredient added: ", result);
    return result;
  } catch (error) {
    console.error("Error adding ingredient: ", error.message);
  }
}

export async function updateIngredientModel(data, id) {
  try {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const setClause = keys.map((key) => `${key} = ?`).join(", ");

    await connection.query(
      `UPDATE alimentos SET ${setClause} WHERE id = ?`,
      [...values, id]
    );
  } catch (error) {
    console.error("Error updating ingredient: ", error.message);
  }
}

export async function deleteIngredient(id) {
  try {
    await connection.query("DELETE FROM alimentos WHERE id = ?", [id]);
    return true;
  } catch (error) {
    console.error("Error deleting ingredient: ", error.message);
  }
}
