import { createDiaryModel, getDiaryModel } from "../models/diarioModel.js";

export async function listDiaryController(req, res) {
  try {
    const userId  = req.params.id;
    const diaryEntries  = await getDiaryModel(userId );
    res.status(200).json(diaryEntries);
  } catch (error) {
    console.error(error);
    res.status(404).send("Unable to find diary entries");
  }
}


export async function createDiaryController(req, res) {
  try {
    const diaryData  = req.body;
    console.log(diaryData.recipeId);
    console.log(diaryData.userTeaId);
    console.log(diaryData.mealDate);

    const result  = await createDiaryModel({
        recipeId: diaryData.recipeId,
        userTeaId: diaryData.userTeaId,
        mealTime: diaryData.mealTime,
        mealDate: diaryData.mealDate
    });
    res.status(201).json({ message: "Diary entry created successfully" });
  } catch (error) {
    console.error("Error creating diary entry: ", error);
    res.status(400).send("Unable to create diary entry: CONTROLLER ERROR");
  }
}