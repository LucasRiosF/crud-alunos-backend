import prisma from "../database/prismaClient.js";

async function listar() {
    return await  prisma.aluno.findMany()
}

async function buscarPorID(id) {
    return await prisma.aluno.findUnique({
        where: { id: Number(id) }
    })
}

async function criar(dados) {
    return await prisma.aluno.create({
        data: {
            nome: dados.nome,
            email: dados.email
        }
    })
}

async function atualizar(id, dados) {
    return await prisma.aluno.update({
        where: {id: Number(id)},
        data: {
            nome: dados.nome,
            email: dados.email
        }
    })
}

async function deletar(id) {
    return await prisma.aluno.delete({
        where: {id: Number(id)}
    })
}

export default { listar, criar, atualizar, deletar, buscarPorID }