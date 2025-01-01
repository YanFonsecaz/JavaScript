function media() {
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)
    let n3 = Number(document.querySelector('input#n3').value)
    let result = document.querySelector('div#result')

    if (isNaN(n1) || n1 <= 0) {
        alert('valor invalido');
        return
    }
    if (isNaN(n2) || n2 <= 0) {
        alert('valor invalido');
        return
    }
    if (isNaN(n3) || n3 <= 0) {
        alert('valor invalido');
        return
    }

    let media = (n1 + n2 + n3) / 3

    result.innerHTML = ''
    result.innerHTML = `A media é ${media.toFixed(2).replace('.', ',')}`
}