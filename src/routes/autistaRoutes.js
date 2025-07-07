import express from "express";
import { listAutisticUsers, createAutisticUserController, getAutisticUserById, updateAutisticUserController, deleteAutisticUserController} from "../controllers/autistaController.js";

const autisticUserRoutes = (app) => {
    app.use(express.json());

    app.get("/autistas", listAutisticUsers);
    app.get("/autista/:id", getAutisticUserById);
    app.post("/autista", createAutisticUserController);
    app.patch("/autista/:id", updateAutisticUserController);
    
    app.delete("/autista/:id", deleteAutisticUserController);
}

export default autisticUserRoutes;
