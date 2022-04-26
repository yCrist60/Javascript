function array1(){  /* array =Conjuto de dados sobre uma informação*/ 
    var nomes = ["Paulo", "Helena", "Vanessa"];
    // console.log(nomes[0]);
    for(var i = 0; i <nomes.length; i++) {
        console.log(nomes[i]);
    }
    // vamos adicionar um nome
    nomes.push("Cristian");
    console.log(nomes);
    // Remover o ultimo elemento do array
    nomes.pop();
    console.log(nomes);

    nomes.shift();  /* remove o primeiro elemento do array */
    console.log(nomes);

    // Adicionar o primeiro elemento do array
    nomes.unshift("Wagner");
    nomes.push("Gabriela");
    console.log(nomes);

    // Vamos criar uma matriz com nome e idade 
    var dados = [
            ["Nome","Idade"],
            ["pedro","15"],
            ["Marcos","21"],
            ["Deborah","22"],
    ];

    console.log(dados);

}    