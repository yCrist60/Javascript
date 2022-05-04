// Importação do módulo do servido express
const express = require("express");

// importação do módulo mongoose
const mongoose = require("mongoose");

// criação do aplicaivo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());


// Url de conexao com o banco de dados MongoDB 
//  mongodb+srv://Cristian:<password>@projetobackapi.97bt3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const urldb = "mongodb+srv://Cristian:123@projetobackapi.97bt3.mongodb.net/BancoDados?retryWrites=true&w=majority"
// <password>, colocar a senha, no caso 123.
mongoose.connect(urldb,{useNewUrlParser:true, useUnifiedTopology:true});

// Criar a estrutura da tabela para cadastro dos clientes 
const tabela = mongoose.Schema({
    nome:String,
    email:String,
    idade:String,
})

// Criar o modelo de dados, ou seja, criar a tabela com a estrotura
const Cliente = mongoose.model("tbcliente",tabela);



// Vamos criar a primeira roda do Servidor
// Está será a rota raiz
app.get("/",(req,res) => {
    
// Vamos trazer todos os cliente cadastrados e exibi em tela
Cliente.find((erro,dados)=>{
    if(erro)return res.status(500).send({output:`Erro ao carregar Cliente -> ${erro}`});
    res.status(200).send({output:dados});
})


});

// Vamos criar a rota com o verbo post. È usado quando
// se deseja cadastar um dado ou para fazer
// sistema de login 
app.post("/cadastro",(req,res) => {
    // Vamos criar  um novo clientea partir dos dados enviados
    const cli = new Cliente(req.body);

    // Comando SAVE para gravar os dados no banco de dados 
    cli.save().then((dados) =>{
        res.status(201).send({output:`Cliente Cadastrado`,info:dados});
    })
    .catch((erro)=>res.status(500).send({output: `Erro de Cadastrar->${erro}`}));
})

// Rota para atualizar os dados do cliente. vamos usar o verbo PUT.
// Para atualizar precisaemos de 2 informações. A primeira é o ID 
// do dado que você deseja atualizar e a segunda são os dados
// que deseja atualizar
app.put("/atualizar/:id",(req,res) => {
    
    Cliente.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true }, 
        (erro, dados)=>{
         if(erro)
          return res.status(400).send({output: `Erro ao Atualizar->${erro}`});
          res.status(200).send({output: `Atualizando`, info: dados});
    });
});

// Para deletar um dado iremos usar o verbo DELETE passando o ID
app.delete("/apagar/:id",(req,res) => {
    
    Cliente.findByIdAndDelete(req.params.id, (erro,dados)=>{
        if(erro)
            return res.status(500).send({outpout: `Erro ao carregar ->${erro}`});
        res.status(204).send({ outpout: `Apagou`});
    });
});

// Definir uma porta de comunicaçã com o servidor d aplcação
app.listen(5000,()=> console.log("On line em http://localhost:5000"));
