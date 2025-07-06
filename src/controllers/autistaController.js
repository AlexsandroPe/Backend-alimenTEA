import {
  getAutistaByID,
  getAutistas,
  postAutista,
  updateAutista,
  DeleteUserTea,
} from "../models/autistaModel.js";

export async function listarAutistas(req, res) {
  try {
    const posts = await getAutistas();
    // console.log(posts)
    res.status(200).send(posts);
  } catch (error) {
    console.error(error);
    res.status(404).send("Não foi possivel encontrar os posts");
  }
}

export async function listarAutistaByID(req, res) {
  const index = await getAutistaByID(req.params.id);
  res.status(200).json(index);
  console.log(index);
}

export async function criarAutista(req, res) {
  try {
    const autista = req.body;
    console.log("data no controler: ", typeof autista.dataNascimento);
    console.log("autista image controller:", autista.imagem);
    const restornodb = await postAutista({
      nome: autista.nome,
      imagem: autista.imagem,
      dataNascimento: autista.dataNascimento,
      espectro: autista.espectro,
      alergia: autista.alergia,
      intolerancia: autista.intolerancia,
      id_usuarioAdministrador: 1,
      ativo: true,
      parentesco: autista.parentesco,
    });

    console.log(restornodb);
    console.log(autista);
    res.status(201).json({ message: "Autista criado com sucesso" });
  } catch (error) {
    res.status(400).send("Erro ao criar Autista");
    console.error(error);
  }
}

export async function deletarAutista(req, res) {
  try {
    const DelUserTeaID = Number(req.params.id);
    DeleteUserTea(DelUserTeaID);
    res.status(200).send("Autista deletado com sucesso");
  } catch (error) {
    console.error(error);
    res.status(400).send();
  }
}

export async function atualizarAutista(req, res) {
  try {
    const id = req.params.id;
    const dataToUpdate = req.body;
    const updateReturn = await updateAutista(dataToUpdate, id);
    console.log("retorno: ", updateReturn);

    res.status(200).send("autista atualizado com sucesso");
  } catch (error) {
    console.error("Erro ao atualizar: ", error);
  }
}
