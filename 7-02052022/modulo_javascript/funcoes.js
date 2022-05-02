function Mensagem(){
    console.log("Olá! eu veho de um modúlo");
}

function Data(){
    console.log(new Date().toLocaleDateString());
}
export function soma(n1,n2){
    console.log(n1+n2);
}

export {Mensagem}
export {Data}
