function repeticao1(){
    for(var i = 0 ; i<=10 ; i++){
        console.log(i);
    }
}
function galeria(){
    const minuatura = document.getElementById("miniatura");
    const painel = document.getElementById("painel");

    for(var i = 1 ; i <= 5 ; i++){
        minuatura.innerHTML += "<img src=img/n" +i+ ".jpg id=n" + i + ">";
        // o sinal de + recoloca a imagem sem subtituila pela antecessor, repetindo-a em 
        // sequência
    }
    abrirNoPainel();
}

function abrirNoPainel(){
    document.getElementById("n1").onclick=function(){
        painel.innerHTML = "<img src=img/n1.jpg>";
        // somente o sinal de = substitui as img anteriores e soemnte 1 na posição 
    };
    
}