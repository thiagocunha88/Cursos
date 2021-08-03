const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    const paciente = pacientes[i];
    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;
    const tdImc = paciente.querySelector(".info-imc")

    let alturaValida = validaAltura(altura);
    let pesoValido = validaPeso(peso);

    if(!pesoValido){
        console.log("Peso inválido!");
        pesoValido = false;
        tdPeso.textContent = "Peso inválido!";
        tdImc.textContent = "Erro!"
        paciente.classList.add("paciente-invalido");
    } 

    if(!alturaValida) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida!"
        tdImc.textContent = "Erro!"
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc (peso, altura){
    let imc = 0;
    imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso <=500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <=2.5){
        return true;
    }else{
        return false;
    }
}
// const dados = document.querySelector("#tabela-pacientes")

// const calculoImc = () => {
    
//     dados.forEach(((dados) => {
//         const paciente = document.querySelector(".paciente")
//         const tdPeso = paciente.querySelector(".info-peso");
//         const peso = tdPeso.textContent;

//         const tdAltura = paciente.querySelector(".info-altura");
//         const altura = tdAltura.textContent;

//         const imc = peso / (altura ** 2);

//         const tdImc = paciente.querySelector(".info-imc")

//         tdImc.textContent = imc;
        
//     }))
// }
// console.log(dados);
