import express from "express";
import cors from "cors";
import alunosRoutes from "./routes/alunosRoutes.js"

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/alunos", alunosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
