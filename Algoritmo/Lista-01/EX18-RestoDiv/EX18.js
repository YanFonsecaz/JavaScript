document.addEventListener('keypress', function (event){
    if(event.key === 'Enter'){
        resto()
    }
})

function resto(){
    let n1 = Number(document.querySelector('input#n1').value)
    let result = document.querySelector('div#result')

    if(isNaN(n1 || n1 <=0)){
        alert('Valor invalido')
    }

    let resto = n1%2

    result.innerHTML = ''
    result.innerHTML = `o Resto da divição por 2 é ${resto}`
}