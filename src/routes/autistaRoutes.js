import express from "express";
import { listarAutistas, criarAutista, listarAutistaByID, atualizarAutista, deletarAutista} from "../controllers/autistaController.js";

const autistaRoutes = (app) => {
    app.use(express.json());

    app.get("/autistas", listarAutistas);
    app.get("/autista/:id", listarAutistaByID);
    app.post("/autista", criarAutista);
    app.patch("/autista/:id", atualizarAutista);
    
    app.delete("/autista/:id", deletarAutista);
}

export default autistaRoutes;
