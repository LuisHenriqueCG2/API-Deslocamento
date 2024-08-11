let urlPutCliente = 'https://api-deslocamento.herokuapp.com/api/v1/Cliente/1' //+ document.getElementById("id").value;
let urlPutCondutor = 'https://api-deslocamento.herokuapp.com/api/v1/Condutor/1';
let urlPutVeiculo = 'https://api-deslocamento.herokuapp.com/api/v1/Veiculo/1';

const formAlteraCliente = document.getElementById("formAlteraCliente")
const formAlteraCondutor = document.getElementById("formAlteraCondutor")
const formAlteraVeiculo = document.getElementById("formlAlterarVeiculo")

function alterarCliente(){

    event.preventDefault()

    const body = {
        id: formAlteraCliente.elements.id.value,
        nome: formAlteraCliente.elements.nome.value,
        logradouro: formAlteraCliente.elements.logradouro.value,
        numero: formAlteraCliente.elements.numero.value,
        bairro: formAlteraCliente.elements.bairro.value,
        cidade: formAlteraCliente.elements.cidade.value,
        uf: formAlteraCliente.elements.uf.value
    }
   
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open('PUT', urlPutCliente, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))
    
    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}

function alterarCondutor(){
    event.preventDefault()

    const bodyCondutor = {
        id: formAlteraCondutor.elements.id.value,
        categoriaHabilitacao: formAlteraCondutor.elements.categoriaHabilitacao.value,
        vencimentoHabilitacao: formAlteraCondutor.elements.vencimentoHabilitacao.value
    }
   
    console.log("Body=", bodyCondutor)
    let request = new XMLHttpRequest()
    request.open('PUT', urlPutCondutor, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(bodyCondutor))
    
    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}

function alterarVeículo(){
    event.preventDefault()

    const bodyVeiculo = {
        id: formAlteraVeiculo.elements.id.value,
        marcaModelo: formAlteraVeiculo.elements.marcaModelo.value,
        anoFabricacao: formAlteraVeiculo.elements.anoFabricacao.value,
        kmAtual: formAlteraVeiculo.elements.kmAtual.value
    }
   
    console.log("Body=", bodyVeiculo)
    let request = new XMLHttpRequest()
    request.open('PUT', urlPutVeiculo, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(bodyVeiculo))
    
    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}