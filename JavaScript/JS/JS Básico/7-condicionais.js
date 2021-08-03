console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {

//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(1, 1); //removendo um item

// } else if (estaAcompanhada) {
//     console.log(`Comprador está acompanhada`);
//     listaDeDestinos.splice(1, 1); //removendo um item

// } else {
//     console.log(`Não é maior de idade e não posso vender`);
// }

//|| é o símbolo para OU
if (idadeComprador >= 18 || estaAcompanhada == true) {

    console.log(`Boa Viagem!`);
    listaDeDestinos.splice(1, 1); //removendo um item

} else {
    console.log(`Não é maior de idade e não posso vender`);
}

console.log(`Embarque: \n\n`)

//&& é o símbolo para E
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Boa Viagem`);
} else {
    console.log(`Você não pode embarcar`)
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
