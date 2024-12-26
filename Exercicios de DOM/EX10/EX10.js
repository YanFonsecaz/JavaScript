let vetor = []
let soma = 0
function adicionar() {
    let valor = document.querySelector('input#valor').value
    let valorUsu = parseInt(valor)

    if (isNaN(valorUsu) || valorUsu < 1 || valor > 100) {
        alert('Valor invalido!!')
        return
    }
    if (vetor.indexOf(valorUsu) == !-1) {
        alert('Valor existente');
        return
    } else {
        vetor.push(valorUsu)
        soma += valorUsu
    }
    let selectHTML = document.querySelector('select#select')
    let addOption = document.createElement('option')
    addOption.text = valorUsu
    selectHTML.appendChild(addOption);

    vetor.sort()

}
function finalizar(){
    let result = document.querySelector('div#result')

    result.innerHTML = ''
    result.innerHTML = `Ao todo temos ${vetor.length} numeros cadastrados <br>`
    result.innerHTML += `O Maior valor ${vetor[vetor.length - 1]} <br>`
    result.innerHTML += `O Menor valor ${vetor[0]} <br>`
    result.innerHTML += `A soma dos valores é ${soma} <br>`
    result.innerHTML += `a media é ${soma / vetor.length} <br>`
}