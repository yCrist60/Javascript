// Importação do módulo do servido express
const express = require("express");

// criação do aplicaivo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

// Vamos criar a primeira roda do Servidor
// Está será a rota raiz
app.get("/",(req,res) => {
    res.send("olá! Seja bem vindo ae. Você está na rota raizZz!");
});
// Definir uma porta de comunicaçã com o servidor d aplcação
app.listen(5000,()=> console.log("On line em http://localhost:5000"));
