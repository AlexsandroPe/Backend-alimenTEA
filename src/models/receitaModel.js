import connection from "../config/db.js";

export async function getReceitasModel() {
  try {
    const [rows] = await connection.query(
      "SELECT id, nomeReceita, descricaoReceita, modoPreparo FROM receita"
    );
    return rows;
  } catch (error) {
    console.log("Erro ao buscar receitas no banco: ", error.message);
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

export async function addReceitaModel({nomeReceita, descricaoReceita, modoPreparo}) {
  try {
    const row = await connection.query(
      "INSERT INTO receita(nomeReceita,descricaoReceita, modoPreparo)  VALUES(?,?,?)",
      [nomeReceita, descricaoReceita, modoPreparo]
    );
    console.table("Receita adicionada: ", row);
  } catch (error) {
    console.error("Erro ao adicionar receita no banco\n ", error.message);
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
