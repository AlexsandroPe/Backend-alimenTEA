import connection from "../config/db.js";

export async function getRecipes() {
  try {
    const [rows] = await connection.query(
      "SELECT id, nomeReceita, descricaoReceita, modoPreparo FROM receita"
    );
    return rows;
  } catch (error) {
    console.log("Error fetching recipes from the database: ", error.message);
  }
}

// export async function getReceitasByIdModel(id) {
//   try {
//     const receitaId = Number(id);
//     const [receita] = await connection.query(
//       "SELECT * FROM receita WHERE id = ?",
//       [receitaId]
//     );
//     console.log(receita);
//     return posts;
//   } catch (error) {
//     console.log(Error.message);
//   }
// }

export async function createRecipe({name, description, preparationMethod}) {
  try {
    const row = await connection.query(
      "INSERT INTO receita(nomeReceita,descricaoReceita, modoPreparo)  VALUES(?,?,?)",
      [name, description, preparationMethod]
    );
  } catch (error) {
    console.error("Error inserting recipe into the database\n ", error.message);
  }
}

// export async function updateReceitaModel(data, id) {
//   try {
//     const dataKeys = Object.keys(data);
//     console.log(dataKeys);
//     const dataValues = Object.values(data);
//     console.log(dataValues);
//     const setColumns = dataKeys
//       .map((key) => {
//         return `${key} = ?`;
//       })
//       .join(", ");
//     console.log(setColumns);
//     const row = connection.query(
//       `UPDATE alimentos SET ${setColumns} WHERE id = ?`,
//       [...dataValues, id]
//     );
//   } catch (error) {
//     console.log("Erro no model...", error.message);
//   }
// }

// export async function delReceitaModel(id) {
//   try {
//     const row = connection.query("DELETE FROM alimentos WHERE id = ?", [id]);
//     return true;
//   } catch (error) {
//     console.error("Erro no model: ", error.message);
//   }
// }
