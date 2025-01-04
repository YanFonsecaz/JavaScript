document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        veriMaior()
    }
})

function veriMaior() {
    let v1 = parseFloat(document.querySelector('input#v1').value)
    let v2 = parseFloat(document.querySelector('input#v2').value)

    if (isNaN(v1)) {
        alert('Valor Invalido')
        return
    }
    if (isNaN(v2)) {
        alert('Valor Invalido')
        return
    }

    let result = document.querySelector('div#result')
    result.innerHTML = ''
    
    result.innerHTML = v1 > v2 ? `o ${v1} é o maior numero` : v2 > v1 ? `o ${v2} é o valor maior` : `Os numeros sao iguais`

    /*if (v1 > v2) {
        result.innerHTML = `O ${v1} é o maior numero`
        return
    }
    if (v2 > v1) {
        result.innerHTML = `O ${v2} é o maior numero`
        return
    }
    if (v2 == v1) {
        result.innerHTML = `O valor ${v1} e o valor ${v2} sao iguais!`
        return
    }*/

}