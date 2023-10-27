let quantidade = 0

function clic() {
    quantidade++
    console.log(quantidade);
}

function alerta() {
    alert(`Você clicou ${quantidade} vezes`)
}

function zerou() {
    quantidade = 0
    console.log(quantidade);  
}
