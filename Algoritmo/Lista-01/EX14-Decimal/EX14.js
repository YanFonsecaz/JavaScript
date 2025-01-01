document.addEventListener('presskey', function (event){
    if(event.key === 'Enter'){
        subTra()
    }
})

function subTra(){
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)
    let result = document.querySelector('div#result')

    if (isNaN(n1) || n1 <= 0){
        alert('Valor Invalido!!')
        return
    }
    if (isNaN(n2) || n2 <= 0){
        alert('Valor Invalido!!')
        return
    }
    
    let n3 = n1 - n2

    result.innerHTML = ''
    result.innerHTML = `O resultado do decimal ${n3.toFixed(2).replace('.',',')}`
}