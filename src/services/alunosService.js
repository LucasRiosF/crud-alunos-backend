import pool from "../database.js";

async function listar() {
    const result = await pool.query("SELECT * FROM alunos");
    return result.rows;
}

async function criar({ nome, email}) {
    const result = await pool.query("INSERT INTO alunos (nome, email) VALUES ($1, $2) RETURNING*", [nome, email]);
   return result.rows[0]; 
}

async function atualizar(id, { nome, email }) {
    const result = await pool.query("UPDATE alunos SET nome = $1, email = $2 WHERE id = $3 RETURNING *", [nome, email, id]);
    return result.rows[0];
}

async function deletar(id) {
    await pool.query("DELETE FROM alunos WHERE id = $1", [id]);
}

export default { listar, criar, atualizar, deletar }