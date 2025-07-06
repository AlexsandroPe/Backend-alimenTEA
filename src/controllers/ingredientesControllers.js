import { getIngrediente, CriarIngrediente, deleteIngre, updateIngModel} from "../models/ingredientesModel.js";

export async function listarIngredientes(req, res) {
  try {
    const ingredientes = await getIngrediente();
    console.log(ingredientes);
    res.status(200).send(ingredientes);
  } catch (error) {
    console.error(error);
    res.status(404).send("Não foi possivel encontrar os ingredientes");
  }
}

export async function listarIngredientePorID(req, res) {
  const ingredienteID = await getIngredienteByID(req.params.id);
  res.status(200).json(ingredienteID);
  console.log(index);
}

export async function createIngrediente(req, res) {
  try {
    const ingredienteData = req.body;
    console.log(ingredienteData);
    
    const ingredienteHeaderInfo = await CriarIngrediente({
      nome: ingredienteData.nome,
      categoria: ingredienteData.categorias[0],
      industrializado: false,
      gluten: ingredienteData.gluten,
      lactose: ingredienteData.lactose,
      ativo: true
    });
    res.status(201).json({ message: "Ingrediente criado com sucesso" });
  } catch (error) {
    res.status(400).send("Não foi posssível criar o ingrediente: ERRO NO CONTROLLER");
    console.error("erro ao criar ingrediente: ", error);
  }
}


export async function updateIngredienteController(req, res) {
  try {
    
    const ingID = Number(req.params.id);
    const ingredienteDataUpd = req.body;
    const retUp = await updateIngModel(ingredienteDataUpd, ingID); 
    res.status(200).send("Atualizado!!");
  } catch (error) {
    console.error("Erro ao atualizar ingrediente ", error.message);
    res.status(400).send("Erro ao atualizar ingrediente");
  }
}


export async function delIngredController(req, res) {
  try {
    const ingID = req.params.id;
    const ret = await deleteIngre(ingID);
    console.log(ret); 
    res.status(200).send("Ingrediente deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar ingrediente: ", error);
  }
}

