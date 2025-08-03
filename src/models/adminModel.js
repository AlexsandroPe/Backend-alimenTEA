import connection from "../config/db.js";

export async function getAdmin(email) {
  try {
    const [admin] = await connection.query(
      "SELECT nome, email, telefone FROM usuarioadministrador WHERE email = ?",
      [email]
    );
    console.log(admin)
    return admin;
  } catch (error) {
    console.error(error, "erro");
  }
}

export async function getLogin(email, password) {
  try {
    const [[adminId]] = await connection.query(
      "SELECT id FROM usuarioadministrador WHERE email = ? AND senha = ?",
      [email, password]
    );
    console.log(adminId)
    return adminId;
  } catch (error) {
    console.error("Error during login query : ", error);
  }
}

export async function createAdmin({name, email, password, birthDate, telephone}) {
  try {
    const [adminRow] = await connection.query(
      "INSERT INTO usuarioadministrador(nome, email, senha, telefone, dataNascimento) VALUES(?, ?, ?, ?, ?)",
      [name, email, password, telephone, birthDate]
    );

    console.log("Admin created");
  } catch(error) {
    console.error("Error creating admin", error.message);
  }
}

export async function udpateAdminModel(adminData, adminId) {
  try {
    const adminEntries = Object.entries(adminData);
    const values = Object.values(adminData);
    const setClauses = adminEntries.map(([keys]) => `${keys} = ?`).join(", ");
    const [row] = await connection.query(
      `UPDATE usuarioadministrador SET ${setClauses} WHERE id = ?`,
      [...values, adminId]
    );
    return row;
  } catch (error) {
    console.error("Error during admin update query: ", error);
  }
}

export function deleteAdmin(adminId) {
  try {
    const result = connection.query(
      "DELETE FROM usuarioadministrador WHERE id = ?",
      [adminId]
    );
    console.log("Successfully deleted");
    return result;
  } catch (error) {
    console.error("Error during deleting query:", error);
  }
}
