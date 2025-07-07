
import { getAdmin, createAdmin, udpateAdminModel, deleteAdmin, getLogin} from "../models/adminModel.js";

export async function getAdminController(req, res) { 
  try {
      const email = req.params.email
      const [admin]= await getAdmin(email);
      console.log(admin);
      
      res.status(200).send(admin)
    } catch (error) {
      console.error(error);
      res.status(404).send("Couldn't find the admins");
    }
}

export async function loginController(req, res) { 
  const {email, password} = req.body;
  const adminId = await getLogin(email, password);

  if(!adminId){ 
      return res.status(404).json({
      message: "User not found",
      adminId: null,
    });
  }

  res.status(200).json({
    message: "Successful login",
    email: true,
    token: req.token,
    password: true,
    adminId: adminId,
  })
}

export async function createAdminController(req, res) {
  try {
    const adminData = req.body;
    console.log(adminData)
    await createAdmin({
      name: adminData.name,
      email: adminData.email,
      password: adminData.password,
      birthDate: adminData.birthDate,
      telephone: adminData.telephone,
    });
  }
  catch (error) {
    console.error(Error)
  }
}
export async function updateAdmin(req, res) {
  try {
    const adminID = Number(req.params.id);
    const adminUpdateData = req.body;
    const updateResult = await udpateAdminModel(adminUpdateData, adminID);
    if (updateResult !== null) { 
      console.log("Admin update result: ", updateResult);
      res.status(200).send("Admin successfully updated")
    }
  } catch (error) {
    console.error("Erro no controler: ", error)
  }
}

export async function deleteAdminController(req, res) {
  try {
    const adminId = Number(req.params.id);
    const deleteResult = await deleteAdmin(adminId);
    console.log("delete result: ", deleteResult)
     res.status(200).send("Administrator successfully deleted")
  } catch (error) {
    console.error("Error deleting admin", error)
    res.status(400).send("Error deleting admin")
  }
}