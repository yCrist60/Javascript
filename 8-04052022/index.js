const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

/* cors permite aceitar acesso por protocolos diferente, tais como:
http
https
file
tfp
smb e etc
 */

app.use(cors());

const urldb = 
    "mongodb+srv://Cristian:123@projetobackapi.97bt3.mongodb.net/BancoDados?retryWrites=true&w=majority"

mongoose.connect(urldb,{useNewUrlParser:true, useUnifiedTopology:true});

const tabela = mongoose.Schema({
    nome:String,
    descricao:String,
    categoria:String,
    quantidade:Number,
    preco:Number,
    foto:String,
})

const Produto = mongoose.model("tbproduto", tabela);

// Rota padrão para aAPI
const rota = "/api/produto";

app.get(`${rota}/listar`, (req,res) => {
    
    Produto.find((erro,dados)=>{
    if(erro)return res.status(500).send({output:`Erro ao carregar produtos -> ${erro}`});
    res.status(200).send({output:dados});
})
});

app.post(`${rota}/cadastrar`, (req,res) => {

    const pro = new Produto(req.body);

    pro.save().then((dados) =>{
        res.status(201).send({output:`Produto Cadastrado`,info:dados});
    })
    .catch((erro)=>res.status(500).send({output: `Erro de Cadastrar->${erro}`}));

});

app.put(`${rota}/atualizar/:id`,(req, res) => {

    Produto.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true }, 
        (erro, dados)=>{
         if(erro)
          return res.status(400).send({output: `Erro ao Atualizar->${erro}`});
          res.status(200).send({output: `Atualizando`, info: dados});
    });

})
// -------------------------------------------------------------------------------------
app.delete(`${rota}/apagar/:id`,(req, res) => {

    Produto.findByIdAndDelete(req.params.id, (erro,dados)=>{
        if(erro)
            return res.status(500).send({outpout: `Erro ao carregar ->${erro}`});
        res.status(204).send({ outpout: `Apagou`});
    });
});



app.listen(5000,()=> console.log("On line em http://localhost:5000"));

// fim

