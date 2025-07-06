import connection from "../config/db.js";

export async function getAutistas() {
  try {
    const [rows] = await connection.execute("SELECT * FROM usuariotea2");
    return rows;
  } catch (error) {
    console.error("error em algo: ", error.message);
    throw new Error("Não foi possível buscar os posts.");
  }
}

export async function getAutistaByID(id) {
  try {
    const ide = Number(id);
    const [posts] = await connection.query(
      "SELECT * FROM usuariotea2 WHERE id = ?",
      [ide]
    );
    return posts;
  } catch (error) {
    console.error(Error.message);
  }
}

export async function postAutista({
  nome,
  imagem,
  dataNascimento,
  espectro,
  alergia,
  intolerancia,
  id_usuarioAdministrador,
  ativo,
  parentesco,
}) {
  try {
    const row = await connection.query(
      "INSERT INTO usuariotea2( id_usuarioAdministrador,nome,dataNascimento,espectro,alergia,intolerancia,parentesco,ativo, imgtea) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id_usuarioAdministrador,
        nome,
        dataNascimento,
        espectro,
        alergia,
        intolerancia,
        parentesco,
        ativo,
        imagem,
      ]
    );

    console.log(row);
  } catch (error) {
    console.log(id_usuarioAdministrador);
    console.error("deu pau man: ", error.message);
  }
}

export async function updateAutista(data, id) {
  try {
    const arraydosvalores = Object.entries(data);
    console.log(arraydosvalores);
    const values = Object.values(data);
    const provaveisItens = arraydosvalores
      .map(([keys, values]) => {
        return `${keys} = ?`;
      })
      .join(", ");

    console.log(provaveisItens);
    const result = connection.query(
      `UPDATE usuariotea2 SET ${provaveisItens} WHERE id = ?`,
      [...values, id]
    );
    console.log("DEU CERTO s");
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function DeleteUserTea(id) {
  try {
    const result = connection.query("DELETE FROM usuariotea2 WHERE id = ?", [id]);
    console.log("Deletado com sucesso");
  } catch (error) {
    console.error(error);
  }
}
