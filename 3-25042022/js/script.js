function while1(){
    var i = 0;
    while(i < 10){
        console.log(`contei ${i}`);
        i++;
    }
}
function while2(){
    var operacao = prompt("Digite:\n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-Sair");
    while(operacao!="S"){
        var n1 = prompt("Digite um número");
        var n2 = prompt("Digite outro número");
        if(operacao == "1"){
            alert(parseInt(n1)+parseInt(n2));
        }
        else if (operacao == "2"){
            alert(parseInt(n1)-parseInt(n2));
        }
        else if (operacao == "3"){
            alert(parseInt(n1)*parseInt(n2));   
        }
        else if (operacao == "4"){
            alert(parseInt(n1)/parseInt(n2));
        }
        else{
            alert("O valor digitado nõ é uma operação");
        }

        operacao = prompt(
            "Digite:\n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-Sair");
    }
}

function paleta(){
  
  /*RGB(Vermalo, Verde, Azul);
  RGB(0-255, 0-255, 0-255);
  Vamos usar o comando random(randomico-Aleatório) da
  classe MAth(matemática) para gerar número aleatórios
  entre 0 a 255. Assim iremos formar as coresem RGB
  */
 var tabela = "<table>";
 for(var linha = 1 ; linha <= 10 ; linha++) {
//  for = variavél repetitiva

    tabela+= "<tr>";
    // tr = Table row(Linha da Tabela)

    for(var coluna = 1 ; coluna <= 20 ; coluna++){
        
        var r = Math.round(Math.random()*254)   
        var g = Math.round(Math.random()*254)
        var b = Math.round(Math.random()*254)
    
        tabela += `<td onmouseover=fundo(this.style.backgroundColor) style=background-color:rgb(${r},${g},${b})></td>`;
    }
    tabela+="</tr>";
  }
   tabela+="</table>";

   document.getElementById("Caixa").innerHTML = tabela;
   document.getElementById("Caixa").style.display= "block";

}

function fundo(elemento) {
    document.body.style.backgroundColor = elemento;
}

function fecharPaleta(){
    document.getElementById("Caixa").style.display= "none";
    document.body.style.backgroundColor = "white";
}


 
// Math.round = arredondamento pra cima ou para baixo(númeor inteiro)
// para cima > 0.5
// para baixo < 0.5 
// Math.random = numero decimais, exemplo: 0,224415
// *254 multiplicar o valor Math.random 
// nota: Paleta de cores vai até 255

//  window.document.body.style.backgroundColor=`rgb(${r},${g},${b})`
