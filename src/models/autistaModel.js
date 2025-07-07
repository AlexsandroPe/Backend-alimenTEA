import connection from "../config/db.js";

export async function getAutisticUsers() {
  try {
    const [rows] = await connection.execute("SELECT * FROM usuariotea2");
    return rows;
  } catch (error) {
    console.error("Error fetching autistic users: ", error.message);
    throw new Error("Unable to fetch autistic users.");
  }
}

export async function getAutisticUser(autisticUserId) {
  try {
    const id = Number(autisticUserId);
    const [rows] = await connection.query(
      "SELECT * FROM usuariotea2 WHERE id = ?",
      [id]
    );
    return rows;
  } catch (error) {
    console.error(Error.message);
  }
}

export async function createAutisticUser({
  name,
  image,
  birthDate,
  spectrum,
  allergy,
  intolerance,
  administratorUserId,
  isActive,
  relationship,
}) {
  try {
    const row = await connection.query(
      "INSERT INTO usuariotea2( id_usuarioAdministrador,nome,dataNascimento,espectro,alergia,intolerancia,parentesco,ativo, imgtea) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        administratorUserId,
        name,
        birthDate,
        spectrum,
        allergy,
        intolerance,
        relationship,
        isActive,
        image,
      ]
    );

    console.log(row);
  } catch (error) {
    console.log(id_usuarioAdministrador);
    console.error("Error creating autistic user: ", error.message);
  }
}

export async function updateAutisticUser(updateData, autisticUserId) {
  try {
    const entries = Object.entries(updateData);
    console.log(entries);
    const values = Object.values(updateData);
    const setClause = entries.map(([keys]) => `${keys} = ?`).join(", ");

    console.log(setClause);
    const result = connection.query(
      `UPDATE usuariotea2 SET ${setClause} WHERE id = ?`,
      [...values, autisticUserId]
    );
    console.log("Update successful");
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function deleteAutisticUser(autisticUserId) {
  try {
    const result = connection.query("DELETE FROM usuariotea2 WHERE id = ?", [autisticUserId]);
    console.log("Successfully deleted");
  } catch (error) {
    console.error(error);
  }
}
