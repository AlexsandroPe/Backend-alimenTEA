import { addDiarioModel, getDiarioModel } from "../models/diarioModel.js";

export async function listarDiarioController(req, res) {
  try {
    const idUsuarioTea = req.params.id;
    const diario = await getDiarioModel(idUsuarioTea);
    res.status(200).json(diario);
  } catch (error) {
    console.error(error);
    res.status(404).send("Não foi possivel encontrar o diario");
  }
}


export async function addDiarioController(req, res) {
  try {
    const diarioData = req.body;
    console.log(diarioData.idreceita);
    console.log(diarioData.idusuariotea);
    console.log(diarioData.datarefeicao);

    const diarioModelRes = await addDiarioModel({
        id_receita: diarioData.idreceita,
        id_usuariotea: diarioData.idusuariotea,
        refeicaodia: diarioData.refeicaodia,
        dataRefeicao: diarioData.datarefeicao
    });
    res.status(201).json({ message: "Diario criado com sucesso" });
  } catch (error) {
    console.error("Erro ao criar diario: ", error);
    res.status(400).send("Não foi posssível criar diario: ERRO NO CONTROLLER");
  }
}