
let urlGetCliente = 'https://api-deslocamento.herokuapp.com/api/v1/Cliente';
let  urlPostClinte = "https://api-deslocamento.herokuapp.com/api/v1/Cliente"

let urlGetCondutor = 'https://api-deslocamento.herokuapp.com/api/v1/Condutor';
let urlPostCondutor = 'https://api-deslocamento.herokuapp.com/api/v1/Condutor';

let urlGetVeiculo = 'https://api-deslocamento.herokuapp.com/api/v1/Veiculo';
let urlPostVeiculo = 'https://api-deslocamento.herokuapp.com/api/v1/Veiculo';

const form = document.getElementById("formCliente")
const formCondutor = document.getElementById("formCondutor")
const formVeiculo = document.getElementById("formVeiculos")


//CLIENTE_____________________________________________________________________________________________________________________________
function listarCliente(){

    let request = new XMLHttpRequest();

    request.open('GET', urlGetCliente, true);
    request.setRequestHeader('Accept', 'application/json');
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {

                alert('Sucesso ao abrir a requisição: ' + request.statusText);

                let jsonObj = request.response;

                var tbody = document.getElementById("apiTable").querySelector("tbody");

                for (let i = 0; i <= jsonObj.length - 1; i++) {
                    tbody.innerHTML += "<td>" 
                    + jsonObj[i].id + "</td> <td> <br>"
                    + jsonObj[i].numeroDocumento + "</td> <td>"
                    + jsonObj[i].tipoDocumento + "</td> <td>"
                    + jsonObj[i].nome + "</td> <td>"
                    + jsonObj[i].logradouro + "</td> <td>"  
                    + jsonObj[i].numero + "</td> <td>"
                    + jsonObj[i].bairro + "</td> <td>"
                    + jsonObj[i].cidade + "</td <td>"
                    + jsonObj[i].uf + "</td> <td>";
                }
            } 
        }
    };
    request.onerror = function(e){
        alert('Erro: ' + request.statusText);
    }
    request.responseType = 'json';
    request.send(null);

}

function cadastrarCliente(){

    event.preventDefault()

    const body = {
        numeroDocumento: form.elements.numeroDocumento.value,
        tipoDocumento: form.elements.tipoDocumento.value,
        nome: form.elements.nome.value,
        logradouro: form.elements.logradouro.value,
        numero: form.elements.numero.value,
        bairro: form.elements.bairro.value,
        cidade: form.elements.cidade.value,
        uf: form.elements.uf.value,
    }
   
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open('POST', urlPostClinte, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))
    
    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}

//CONDUTOR________________________________________________________________________________________________________________

function listarCondutor(){

    let request = new XMLHttpRequest();

    request.open('GET', urlGetCondutor, true);
    request.setRequestHeader('Accept', 'application/json');
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {

                alert('Sucesso ao abrir a requisição: ' + request.statusText);

                let jsonObj = request.response;

                var tbody = document.getElementById("apiTableCondut").querySelector("tbody");

                for (let i = 0; i <= jsonObj.length - 1; i++) {
                    tbody.innerHTML += "<td>" 
                    + jsonObj[i].id + "</td> <td> <br>"
                    + jsonObj[i].nome + "</td> <td>"
                    + jsonObj[i].numeroHabilitacao + "</td> <td>"
                    + jsonObj[i].catergoriaHabilitacao + "</td> <td>"
                    + jsonObj[i].vencimentoHabilitacao + "</td> <td>";
                }
            } 
        }
    };
    request.onerror = function(e){
        alert('Erro: ' + request.statusText);
    }
    request.responseType = 'json';
    request.send(null);

}

function cadastrarCondutor(){

    event.preventDefault()

    const bodyCondutor = {
            nome: formCondutor.elements.nome.value,
            numeroHabilitacao: formCondutor.elements.numeroHabilitacao.value,
            categoriaHabilitacao: formCondutor.elements.categoriaHabilitacao.value,
            vencimentoHabilitacao: formCondutor.elements.vencimentoHabilitacao.value

    }
    console.log("Body=", bodyCondutor)

    let request = new XMLHttpRequest()
    request.open('POST', urlPostCondutor, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(bodyCondutor))
    
    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}

//VEÍCULOS____________________________________________________________________________________________________________________________//CONDUTOR________________________________________________________________________________________________________________

function listarVeiculos(){

    let request = new XMLHttpRequest();

    request.open('GET', urlGetVeiculo, true);
    request.setRequestHeader('Accept', 'application/json');
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {

                alert('Sucesso ao abrir a requisição: ' + request.statusText);

                let jsonObj = request.response;

                var tbody = document.getElementById("apiTableVeiculos").querySelector("tbody");

                for (let i = 0; i <= jsonObj.length - 1; i++) {
                    tbody.innerHTML += "<td>" 
                    + jsonObj[i].id + "</td> <td> <br>"
                    + jsonObj[i].placa + "</td> <td>"
                    + jsonObj[i].marcaModelo + "</td> <td>"
                    + jsonObj[i].anoFabricacao + "</td> <td>"
                    + jsonObj[i].kmAtual + "</td> <td>";
                }
            } 
        }
    };
    request.onerror = function(e){
        alert('Erro: ' + request.statusText);
    }
    request.responseType = 'json';
    request.send(null);

}

function cadastrarVeiculos(){

    event.preventDefault()

    const bodyVeiculo = {
        placa: formVeiculo.elements.placa.value,
        marcaModelo: formVeiculo.elements.marcaModelo.value,
        anoFabricacao: formVeiculo.elements.anoFabricacao.value,
        kmAtual: formVeiculo.elements.kmAtual.value
    }
   
    console.log("Body=", bodyVeiculo)
    let request = new XMLHttpRequest()
    request.open('POST', urlPostVeiculo, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(bodyVeiculo))
    
    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}


