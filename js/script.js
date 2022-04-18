// Janela de alerta criada em JAvaScript
function bemvindo() {
  alert("Olá, seja bem vindo");
}

// Vemos solicitar ao usuário que entre com o seu nome
// Utilizaremos o prompt associado a uma variável
function nome() {
  var nome = "";
  nome = prompt("Digite o eu nome");
  alert(nome.toUpperCase()); // nome em letras maiusculas
}

function operacoes() {
}


function operacoesComDiv() {
  // Calcular as cinco operações aritimeticas*/
  var numero1 = prompt("Digite um número");
  var numero2 = prompt("Digite outro número");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;

  for(var i = 0 ; i <= 2; i++){


//   console.log(  // 
    document.getElementsByTagName("div")[i].innerHTML =
    "os resultados são: <br><br>" +
      "soma : " +
      soma +
      "<br>subtração: " +
      subtrair +
      "<br>multiplicação: " +
      multiplicar +
      "<br>divisão: " +
      dividir +
      "<br>resto: " +
      resto;
      document.getElementsByTagName("div")[i].style.padding ="30px";
      document.getElementsByTagName("div")[i].style.background =
      "rgb("+(200*i)+",200,100)";
      document.getElementsByTagName("div")[i].style.margin = "30px";
    }
}

function tamanhoDiv() {
    document.getElement.getElementsByTagName("div")[0].style.width="50%";
    document.getElement.getElementsByTagName("div")[0].style.transition = "ease 0.5s";
}
function tamanhoNormalDiv() {
    document.getElement.getElementsByTagName("div")[0].style.width = "100%"
}
