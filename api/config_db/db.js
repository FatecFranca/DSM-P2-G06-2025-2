import mysql from "mysql2";

export const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',         
  password: '',
  database: 'psiconect', 
  port: 3306             
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err);
    return;
  }
  console.log("Conexão com o MySQL no Azure estabelecida com sucesso!");
});
