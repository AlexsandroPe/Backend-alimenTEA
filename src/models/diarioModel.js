import connection from "../config/db.js";

export async function getDiaryModel(userTeaId) {
  try {
    const [rows] = await connection.query(
      "select date_format(A.dataRefeicao, '%d/%m/%Y') as data, B.nomeReceita, B.id, A.refeicaodia from diario A left join receita B on A.id_receita = B.id where A.id_usuarioTea = ? order by A.dataRefeicao asc", [userTeaId]
    );
    console.log(rows)
    return rows;
  } catch (error) {
    console.error("Error fetching diary from database: ", error.message);
  }
}

export async function createDiaryModel({recipeId, userTeaId, mealTime, mealDate}) {
  try {
    const row = await connection.query(
      "INSERT INTO diario(id_receita,id_usuarioTea, refeicaodia, dataRefeicao)  VALUES(?,?,?,?)",
      [recipeId, userTeaId, mealTime, mealDate]
    );
    console.table("Diary entry recorded: ", row);
  } catch (error) {
    console.error("Error recording diary entry: ", error.message);
  }
}
