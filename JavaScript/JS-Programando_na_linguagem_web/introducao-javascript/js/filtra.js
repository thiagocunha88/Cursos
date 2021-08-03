const campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    
    
    if(this.value.length > 0){
        for(i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            const tdNome = paciente.querySelector(".info-nome");
            const nome = tdNome.textContent;
            const expressao = new RegExp(this.value, "i")
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})