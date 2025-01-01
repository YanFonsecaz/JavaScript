document.addEventListener('presskey', function (event) {
    if (event.key === 'Enter') {
        soma()
    }
})

function soma() {
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)
    let n3 = Number(document.querySelector('input#n3').value)
    let n4 = Number(document.querySelector('input#n4').value)
    let n5 = Number(document.querySelector('input#n5').value)
    let result = document.querySelector('div#result')

    if (isNaN(n1) || n1 <= 0) {
        alert('Valor Invalido')
        return
    }
    if (isNaN(n2) || n2 <= 0) {
        alert('Valor Invalido')
        return
    }
    if (isNaN(n3) || n3 <= 0) {
        alert('Valor Invalido')
        return
    }
    if (isNaN(n4) || n4 <= 0) {
        alert('Valor Invalido')
        return
    }
    if (isNaN(n5) || n5 <= 0) {
        alert('Valor Invalido')
        return
    }

    let soma = n1 + n2 + n3 + n4 + n5
    result.innerHTML = ''
    result.innerHTML = `O resultado é ${soma}`
}