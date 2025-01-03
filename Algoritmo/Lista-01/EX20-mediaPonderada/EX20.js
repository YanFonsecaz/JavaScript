document.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        calcMedia()
    }
})

function calcMedia(){
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)
    let n3 = Number(document.querySelector('input#n3').value)
    let n4 = Number(document.querySelector('input#n4').value)
    let n5 = Number(document.querySelector('input#n5').value)

    if(isNaN(n1) || n1<0){
        alert(`Valor invalido`)
        return
    }
    if(isNaN(n2) || n2<0){
        alert(`Valor invalido`)
        return
    }
    if(isNaN(n3) || n3<0){
        alert(`Valor invalido`)
        return
    }
    if(isNaN(n4) || n4<0){
        alert(`Valor invalido`)
        return
    }

    if(isNaN(n5) || n5<0){
        alert(`Valor invalido`)
        return
    }

    let mediaPon = (n1 * 2)+(n2*4)+(n3*2)+(n4*5)+(n5*3)/(2+4+2+5+3)

    let result = document.querySelector('div#result')
    result.innerHTML = ''
    result.innerHTML = `A media ponderada é ${mediaPon.toFixed(2)}`
}