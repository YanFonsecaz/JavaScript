document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calcMedia()
    }
})

function calcMedia() {
    let n1 = parseInt(document.querySelector('input#n1').value)
    let n2 = parseInt(document.querySelector('input#n2').value)
    let n3 = parseInt(document.querySelector('input#n3').value)
    let result = document.querySelector('div#result')
    if (isNaN(n1) || n1 <= 0) {
        alert('Valor invalido');
        return
    }
    if (isNaN(n2) || n2 <= 0) {
        alert('Valor invalido');
        return
    }
    if (isNaN(n3) || n3 <= 0) {
        alert('Valor invalido');
        return
    }

    let mult = n1 * n2 * n3
    result.innerHTML = ''
    result.innerHTML = `O resultado da multiplicação é ${mult}`
}