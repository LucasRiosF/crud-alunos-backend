import express from "express";
import alunosController from "../controllers/alunosController.js"

const router = express.Router();

router.get("/", alunosController.listar);
router.post("/", alunosController.criar);
router.put("/:id", alunosController.atualizar);
router.delete("/:id", alunosController.deletar);

export default router;