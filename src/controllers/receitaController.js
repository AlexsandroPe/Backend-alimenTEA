import { addReceitaModel,getReceitasModel } from "../models/receitaModel.js";

export async function listarReceitasController(req, res) {
  try {
    const receitas = await getReceitasModel();
   if(receitas.length == 0) {
    res.status(204).json("Array vazio, não há receitas")
    return receitas;
   } else {
    res.status(200).json(receitas)
    return receitas;
   }

  } catch (error) {
    console.error(error);
    res.status(404).send("Não foi possivel encontrar as receitas");
  }
}


export async function addReceitaController(req, res) {
  try {
    const receitaData = req.body;
    console.log(receitaData);

    const receitaModelRes = await addReceitaModel({
      nomeReceita: receitaData.nomeReceita,
      descricaoReceita: receitaData.descricaoReceita,
      modoPreparo: receitaData.modoPreparo
    });
    res.status(201).json({ message: "Receita criada com sucesso" });
  } catch (error) {
    console.error("Erro ao criar receita: ", error);
    res.status(400).send("Não foi posssível criar a receita: ERRO NO CONTROLLER");
  }
}

// export async function updateReceitaController(req, res) {
//   try {
//     const ingID = Number(req.params.id);
//     const ingredienteDataUpd = req.body;
//     const retUp = await updateReceitaModel(ingredienteDataUpd, ingID);
//     res.status(200).send("Atualizado!!");
//   } catch (error) {
//     console.log("Erro no controller: ", error.message);
//     res.status(400).send("Erro no controller");
//   }
// }

// export async function delReceitaController(req, res) {
//   try {
//     const ingID = req.params.id;
//     const ret = await delReceitaModel(ingID);
//     console.log(ret);
//     res.status(200).send("Ingrediente deletado com sucesso!");
//   } catch (error) {
//     console.log("Erro no controller: ", error);
//   }
// }
