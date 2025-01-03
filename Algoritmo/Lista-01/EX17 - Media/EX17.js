document.addEventListener('keypress', function (event) {
     if(event.key === 'Enter'){
        calcMedia()
     }
})

function validarNome(nome) {
    const regex = /^[A-Za-zÁ-ÿá-ÿ]+$/;
    return regex.test(nome);
}

function calcMedia() {
    let nome1 = document.querySelector('input#name1').value
    let nome2 = document.querySelector('input#name2').value
    let nome3 = document.querySelector('input#name3').value
    let nome4 = document.querySelector('input#name4').value
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)
    let n3 = Number(document.querySelector('input#n3').value)
    let n4 = Number(document.querySelector('input#n4').value)
    let id1 = Number(document.querySelector('input#id1').value)
    let id2 = Number(document.querySelector('input#id2').value)
    let id3 = Number(document.querySelector('input#id3').value)
    let id4 = Number(document.querySelector('input#id4').value)
    let result = document.querySelector('div#result')

    if (isNaN(n1) || n1 <= 0) {
        alert('O valor esta invalido')
        return
    }
    if (isNaN(n2) || n2 <= 0) {
        alert('O valor esta invalido')
        return
    }
    if (isNaN(n3) || n3 <= 0) {
        alert('O valor esta invalido')
        return
    }
    if (isNaN(n4) || n4 <= 0) {
        alert('O valor esta invalido')
        return
    }
    if (isNaN(id1) || id1 <= 0) {
        alert('Idade esta invalida')
        return
    }
    if (isNaN(id2) || id2 <= 0) {
        alert('Idade esta invalida')
        return
    }
    if (isNaN(id3) || id3 <= 0) {
        alert('Idade esta invalida')
        return
    }
    if (isNaN(id4) || id4 <= 0) {
        alert('Idade esta invalida')
        return
    }

    if (!validarNome(nome1) || !validarNome(nome2) || !validarNome(nome3) || !validarNome(nome4)) {
        alert('Nome digitado invalido')
        return
    }

    let media = (n1 + n2 + n3 + n4) / 4

    result.innerHTML = ''
    result.innerHTML = `O resultado da media é ${media}`

}