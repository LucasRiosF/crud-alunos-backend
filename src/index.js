import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import alunosRoutes from "./routes/alunosRoutes.js"

const app = express();
app.listen(3001)

app.use(cors());
app.use(express.json());

app.use("/alunos", alunosRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
