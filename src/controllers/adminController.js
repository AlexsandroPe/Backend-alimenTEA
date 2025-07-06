
import { getAdmins, createAdmin, udpateAdminModel, deleteAdmin, getLogin} from "../models/adminModel.js";

export async function getAdminsController(req, res) { 
  try {
      const email = req.params.email
      const [admin]= await getAdmins(email);
      console.log(admin);
      
      res.status(200).send(admin)
    } catch (error) {
      console.error(error);
      res.status(404).send("Não foi possivel encontrar os admins");
    }
}

export async function loginController(req, res) { 
  const {email, senha} = req.body;
  console.log("req: ", email)
  console.log("req: ", senha)
  const id = await getLogin(email, senha);
  console.log("token", req.token)
  console.log("retorno", id)

  if(!id){ 
      return res.status(404).json({
      message: "usuario nao foi encontrado",
      idUsuario: null,
    });
  }

  res.status(200).json({
    message: "Login bem sucedido",
    email: true,
    token: req.token,
    senha: true,
    idUsuario: id,
  })
}

export async function criarAdmin(req, res) {
  try {
    const admin = req.body;
    await createAdmin({
      nome: admin.nome,
      senha: admin.senha,
      email: admin.email,
      dataNascimento: admin.dataNascimento,
      telefone: admin.telefone,
    });
  }
  catch (error) {
    console.error(Error)
  }
}
export async function updateAdmin(req, res) {
  try {
    const adminID = req.params.id;
    const adminUpdateData = req.body;
    const updateReturn = await udpateAdminModel(adminUpdateData, adminID);
    if (updateReturn !== null) { 
      console.log("Valor update: ", updateReturn);
      res.status(200).send("Admin atualizado com sucesso")
    }
  } catch (error) {
    console.error("Erro no controler: ", error)
  }
}

export async function deletarAdmin(req, res) {
  try {
    const delAdmin = Number(req.params.id);
    const delAdminReturn = await deleteAdmin(delAdmin);
    console.log("delete return: ", delAdminReturn)
     res.status(200).send("Administrador deletado com sucesso")
  } catch (error) {
    console.error("Erro ao deletar admnistrador", error)
    res.status(400).send("Erro ao deletar administrador")
  }
}