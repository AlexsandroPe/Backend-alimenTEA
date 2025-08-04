import express from "express";
import {
  getAdminController,
  createAdminController,
  updateAdmin,
  deleteAdminController,
  loginController,
} from "../controllers/adminController.js";
import tokenVerify from "../middleware/tokenverify.js"

const router = express.Router();

  router.get("/:email", tokenVerify, getAdminController);
  router.post("/login", loginController);
  router.post("/", createAdminController);
  router.patch("/:id", tokenVerify, updateAdmin);
  router.delete("/:id", tokenVerify, deleteAdminController);

export default router;
