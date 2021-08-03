const buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){
    console.log("Buscando paciente...");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    });

    xhr.send();

});