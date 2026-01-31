import alunosService from "../services/alunosService.js";

async function listar(req, res) {
    const alunos = await alunosService.listar();
    res.json(alunos);
}

async function buscarPorID(req, res) {
    const { id } = req.params;
    const aluno = await alunosService.buscarPorID(id);

    if(!aluno){
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.json(aluno);
    
}

async function criar(req, res) {
    const aluno = await alunosService.criar(req.body);
    res.status(201).json(aluno);
}

async function atualizar(req, res) {
    const { id } = req.params;
    const aluno = await alunosService.atualizar(id, req.body);
    res.json(aluno);
}

async function deletar(req, res) {
    const { id } = req.params;
    await alunosService.deletar(id);
    res.status(204).send();
}

export default { criar, listar, atualizar, deletar, buscarPorID }