document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        verificacao()
    }
})

function verificacao(){
    let valor = parseFloat(document.querySelector('input#v1').value)

    if(isNaN(valor)){
        alert('Valor Invalido')
        return
    }

    let result = document.querySelector('div#result')
    result.innerHTML = ''

    if(valor == 0){
        result.innerHTML = `O valor ${valor} é igual a zero`
        return
    }
    if(valor > 0){
        result.innerHTML = `O valor ${valor} é positivo`
        return
    }
    if(valor < 0){
        result.innerHTML = `O valor ${valor} é negativo`
        return
    }
}