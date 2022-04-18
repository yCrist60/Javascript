// Janela de alerta criada em JAvaScript
// alert("Olá, seja bem vindo");
// Vemos solicitar ao usuário que entre com o seu nome
// Utilizaremos o prompt associado a uma variável
/*var nome = "";
nome = prompt("Digite o eu nome")
alert(nome.toUpperCase()); // nome em letras maiusculas 

Calcular as cinco operações aritimeticas*/
var numero1 = prompt("Digite um número");
var numero2 = prompt("Digite outro número");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
    "os resultados são: \n\n"+
    "soma : "+soma+
    "\nsubtração: "+subtrair+
    "\nmultiplicação: "+multiplicar+
    "\ndivisão: "+dividir+
    "\nresto: "+resto

);

