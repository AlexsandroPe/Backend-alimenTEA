import express from "express";
import {
  getAdminController,
  createAdminController,
  updateAdmin,
  deleteAdminController,
  loginController,
} from "../controllers/adminController.js";
import auth from "../middleware/jwt.js";

const adminRoutes = (app) => {
  app.use(express.json());
  app.get("/admin/:email", getAdminController);
  app.post("/login", auth, loginController);
  app.post("/admin", createAdminController);
  app.patch("/admin/:id", updateAdmin);
  app.delete("/admin/:id", deleteAdminController);
};

export default adminRoutes;
