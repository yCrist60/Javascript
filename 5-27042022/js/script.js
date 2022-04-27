// Função anônima é uma função que não tem nome.Elá atribuida a um elemento de 
// evento u uma variável. os elementos de evento podem ser: Botões, inputs, Imagens
// e vários outros controles html.

const body = document.body;
// Vamos criar um botão para adicionar a página
const btn1 = document.createElement("button");
btn1.innerHTML = "Primeira função";
// Adicionar o btn1 à página HTML. Adição feita ao body
body.appendChild(btn1);
// Aplicar uma função ao botão btn1 
btn1.onclick = function() {
    // Captura a url da página
    var url= window.location;
    window.document.title = "Trocou o título"
    alert("Trocamos o título da página" + url);
};

// Criar um novo botão btn2
const btn2 = document.createElement("button");
btn2.innerHTML = "Segunda função"
// adicioanr bt2 ao body
body.appendChild(btn2);
btn2.onclick = ()=> {
   document.body.style.backgroundColor = "Yellow";
};

// Vamos Criar uma matriz com produtos
const produtos = [
    ["produto","quantiade","preço"],
    ["calça","15","R$ 150,00"],
    ["Blusa","35","R$ 35,00"],
    ["Tênis","10", "R$ 200,00"],
];

function montarTabela(){
    const div = document.createElement("div");
    var tabela = "<table>";





    for(var linha = 0 ; linha <= 3; linha++){
       tabela  += "<tr>";

    for(var coluna = 0 ; coluna <= 2 ; coluna++) {
        if(linha == 0){
           tabela += `<th>${produtos[linha][coluna]}</th>`; /*Table header(th)= cabeçalho da tabela*/
        }
        else{
            tabela += `<td>${produtos[linha][coluna]}</td>` /* The Table Data Cell element.*/
        }
    }
    tabela +="</tr>";
}

tabela += "</table>";
div.innerHTML = tabela;

body.appendChild(div);
}


const btn3 = document.createElement("button");
btn3.innerHTML = "Terceira função";
body.appendChild(btn3);
btn3.onclick = montarTabela;

const btn4 = document.createElement("button")
btn4.innerHTML = "Quarta função"
btn4.onclick = ()=>{

    // Vamos usar um iterador chamado foreach(para cada)
    // ele está presente no array
    produtos.forEach(function(produto,index){
        console.log(`item da linha ${index} -> ${produto}`);
    });
};
body.appendChild(btn4);

const btn5 = document.createElement("button");
btn5.innerHTML = "Quinta função";
btn5.onclick = ()=>{
    produtos.forEach((produto,index) => {
        produto.forEach((item,ix) => {
            console.log(`Linha ${index} e coluna ${ix} -> ${item}`);

        })
    })
}
body.appendChild(btn5);