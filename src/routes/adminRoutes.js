import express from "express";
import {
  getAdminController,
  createAdminController,
  updateAdmin,
  deleteAdminController,
  loginController,
} from "../controllers/adminController.js";
import auth from "../middleware/jwt.js";

const router = express.Router();


const adminRoutes = () => {
  router.get("/:email", getAdminController);
  router.post("/login", auth, loginController);
  router.post("/", createAdminController);
  router.patch("/:id", updateAdmin);
  router.delete("/:id", deleteAdminController);
};

export default adminRoutes;
