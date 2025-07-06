import connection from "../config/db.js";

export async function getAdmins(email) {
  try {
    const [admin] = await connection.query(
      "SELECT email FROM usuarioadministrador WHERE email = ?",
      [email]
    );
    // console.log(admin)
    return admin;
  } catch (error) {
    console.error(error);
  }
}

export async function getLogin(email, senha) {
  try {
    const [[id]] = await connection.query(
      "SELECT id FROM usuarioadministrador WHERE email = ? AND senha = ?",
      [email, senha]
    );
    console.log("id do model: ", id);
    return id;
  } catch (error) {
    console.error("erro no login model: ", error);
  }
}

export async function createAdmin({
  nome,
  email,
  senha,
  telefone,
  dataNascimento,
}) {
  const [adminRow] = await connection.query(
    "INSERT INTO usuarioadministrador(nome, email, senha, telefone, dataNascimento) VALUES(?, ?, ?, ?, ?)",
    [nome, email, senha, telefone, dataNascimento]
  );
  console.log(adminRow);
}

export async function udpateAdminModel(data, id) {
  try {
    const arraydosvalores = Object.entries(data);
    // console.log(arraydosvalores);
    const values = Object.values(data);
    const provaveisItens = arraydosvalores
      .map(([keys, values]) => {
        return `${keys} = ?`;
      })
      .join(", ");
    console.log(provaveisItens);
    const [row] = await connection.query(
      `UPDATE usuarioadministrador SET ${provaveisItens} WHERE id = ?`,
      [...values, id]
    );
    console.log("Deu bom");
    return row;
  } catch (error) {
    console.error("xiiiiii... Deu erro mano..: ", error);
  }
}

export function deleteAdmin(id) {
  try {
    const result = connection.query(
      "DELETE FROM usuarioadministrador WHERE id = ?",
      [id]
    );
    console.log("Deletado com sucesso");
    return result;
  } catch (error) {
    console.error("erro no model:", error);
    return "erro ";
  }
}
