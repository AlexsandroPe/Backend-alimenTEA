import connection from "../config/db.js";

export async function getDiarioModel(id) {
  try {

    const [rows] = await connection.query(
      "select date_format(A.dataRefeicao, '%d/%m/%Y') as data, B.nomeReceita, B.id, A.refeicaodia from diario A left join receita B on A.id_receita = B.id where A.id_usuarioTea = ? order by A.dataRefeicao asc", [id]
    );
    console.log(rows)
    return rows;
  } catch (error) {
    console.error("Erro ao buscar diário no banco: ", error.message);
  }
}

export async function addDiarioModel({id_receita, id_usuariotea, refeicaodia, dataRefeicao}) {
  try {
    const row = await connection.query(
      "INSERT INTO diario(id_receita,id_usuarioTea, refeicaodia, dataRefeicao)  VALUES(?,?,?,?)",
      [id_receita, id_usuariotea, refeicaodia, dataRefeicao]
    );
    console.table("diario registrado: ", row);
  } catch (error) {
    console.error("Erro ao registrar diario: ", error.message);
  }
}
