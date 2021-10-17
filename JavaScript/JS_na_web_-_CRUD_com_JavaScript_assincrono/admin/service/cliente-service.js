const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })

}

const criaCliente = (nome, email) => {

    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        }) 
    })
    .then( resposta => {
        console.log(resposta.body)
        return resposta.body
    })

}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente
}



// COMANDO PRA RODAR BROWSER-SYNC
// browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
// COMANDO PRA PUXAR OS DADOS DO "SERVIDOR"
// json-server --watch db.json