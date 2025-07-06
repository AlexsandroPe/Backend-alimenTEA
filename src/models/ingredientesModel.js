import connection from "../config/db.js";


export async function getIngrediente() {
  try {
    const [rows] = await connection.query("SELECT id, nome, categoria FROM alimentos");
    return rows;
  } catch (error) {
    console.error("error em algo: ", error.message);
  }
}

export async function getIngredienteByID(id) {
  try {
    const ide = Number(id);
    const [posts] = await connection.query(
      "SELECT * FROM ingredientes WHERE id = ?",
      [ide]);
      console.log(posts);
    return posts;
  } catch (error) {
    console.error(Error.message);
  }
}

export async function CriarIngrediente({nome, categoria, industrializado, gluten, lactose, ativo}) {
  try {
    const row = await connection.query("INSERT INTO alimentos(nome,categoria, industrializado, gluten, lactose, ativo)  VALUES(?,?, ?, ?, ?, ?)", [nome, categoria, industrializado, gluten, lactose, ativo]);
    console.table("Ingrediente adicionado: ", row);
    return row;
  } catch (error) {
    console.error("Erro ao adicionar ingrediente", error.message);
  }
}


export async function updateIngModel(data, id) { 
  try {
    const dataKeys = Object.keys(data);
    console.log(dataKeys);
    const dataValues = Object.values(data);
    console.log(dataValues);
    const setColumns = dataKeys.map((key) => {
      return `${key} = ?`;
    }).join(", ");
    console.log(setColumns);
    const row = connection.query(`UPDATE alimentos SET ${setColumns} WHERE id = ?`,[...dataValues, id]);
  } catch (error) {
    console.error("Erro ao atualizar ingredientes:", error.message);
  }
}

export async function deleteIngre(id) { 
  try{
    const row = connection.query("DELETE FROM alimentos WHERE id = ?", [id]);
    return true;
  }catch(error) { 
    console.error("Erro ao deletar igrediente: ", error.message)
  }
}