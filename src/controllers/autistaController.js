import {
  createAutisticUser,
  deleteAutisticUser,
  getAutisticUser,
  getAutisticUsers,
  updateAutisticUser
} from "../models/autistaModel.js";

export async function listAutisticUsers(req, res) {
  try {
    const autisticUsers = await getAutisticUsers();
    res.status(200).send(autisticUsers);
  } catch (error) {
    console.error(error);
    res.status(404).send("Unable to find autistic users.");
  }
}

export async function getAutisticUserById(req, res) {
  try {
    const autisticId = Number(req.params.id);
    const autisticUser = await getAutisticUser(autisticId);
    if(!autisticUser || autisticUser.length === 0) {
      return res.status(404).send("Autistic user not found.");
    }
    res.status(200).json(autisticUser);
  } catch (error) {
    
  }
}

export async function createAutisticUserController(req, res) {
  try {
    const autisticUserData = req.body;
    const dbResponse  = await createAutisticUser({
      name: autisticUserData.name,
      image: autisticUserData.image,
      birthDate: autisticUserData.birthDate,
      spectrum: autisticUserData.spectrum,
      allergy: autisticUserData.allergy,
      intolerance: autisticUserData.intolerance,
      administratorUserId: 1,
      isActive: true,
      relationship: autisticUserData.relationship,
    });

    console.log(dbResponse);
    res.status(201).json({ message: "Autistic user created successfully." });
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating autistic user");
  }
}

export async function deleteAutisticUserController(req, res) {
  try {
    const autisticUserId = Number(req.params.id);
    deleteAutisticUser(autisticUserId);
    res.status(200).send("Autistic user deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error deleting autistic user");
  }
}

export async function updateAutisticUserController(req, res) {
  try {
    const autisticUserId = Number(req.params.id);
    const updateData = req.body;
    const updateResult = await updateAutisticUser(updateData, autisticUserId);
    console.log("Update result: ", updateResult);

    res.status(200).send("Autistic user updated successufully");
  } catch (error) {
    console.error("Error updating autistic user: ", error);
  }
}
