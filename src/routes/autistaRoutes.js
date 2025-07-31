import express from "express";
import { listAutisticUsers, createAutisticUserController, getAutisticUserById, updateAutisticUserController, deleteAutisticUserController} from "../controllers/autistaController.js";

const router = express.Router();
    router.get("/", listAutisticUsers);
    router.get("/:id", getAutisticUserById);
    router.post("/", createAutisticUserController);
    router.patch("/:id", updateAutisticUserController);
    router.delete("/:id", deleteAutisticUserController);

export default router;
