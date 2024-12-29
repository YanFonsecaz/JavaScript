// AREA DE UM TRIANGULO
function calcArea(){
    let base = Number(document.querySelector('input#base').value)
    let altura = Number(document.querySelector('input#altura').value)
    let result = document.querySelector('div#result')

    if(isNaN(base) || base <= 0) {
        alert('Valor da base invalido!!!')
        return
    }
    if (isNaN(altura) || altura <= 0){
        alert('Valor da altura invalido!!!')
        return
    }

    let area = (altura * base)/2
    result.innerHTML = ''
    result.innerHTML = `A area de um triangulo com a <strong> BASE: ${base}</strong> e <strong>ALTURA: ${altura}</strong> é igual a <strong>${area}</strong>`
}