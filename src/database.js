import pkg from "pg";
const { Pool } = pkg;

const pool  = new Pool({
    user: "postgres",
    host: "localhost",
    database: "crud_alunos",
    password: "lucasrios2209",
    port: "5432"
});

export default pool;