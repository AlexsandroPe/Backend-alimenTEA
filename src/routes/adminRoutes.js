import express from "express";
import {
  getAdminsController,
  criarAdmin,
  updateAdmin,
  deletarAdmin,
  loginController,
} from "../controllers/adminController.js";
import auth from "../middleware/jwt.js";

const adminRoutes = (app) => {
  app.use(express.json());
  app.get("/admin/:email", getAdminsController);
  app.post("/login", auth, loginController);
  app.post("/admin", criarAdmin);
  app.patch("/admin/:id", updateAdmin);
  app.delete("/admin/:id", deletarAdmin);
};

export default adminRoutes;
