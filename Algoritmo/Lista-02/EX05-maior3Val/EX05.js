document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        maiorNum()
    }
})

function maiorNum(){
    let v1 = parseFloat(document.querySelector('input#v1').value)
    let v2 = parseFloat(document.querySelector('input#v2').value)
    let v3 = parseFloat(document.querySelector('input#v3').value)
    
    if(isNaN(v1)){
        alert('Valor invalido')
        return
    }
    if(isNaN(v2)){
        alert('Valor invalido')
        return
    }
    if(isNaN(v3)){
        alert('Valor invalido')
        return
    }

    let result = document.querySelector('div#result')
    result.innerHTML = ''

    let maior = v1

    if(maior<v2){
        maior = v2
    }
    if(maior < v3){
        maior = v3
    }

    return result.innerHTML = `O maior valor ${maior}`
}