const tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out");
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500);
    // event.target.parentNode.remove();

});