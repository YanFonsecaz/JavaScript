document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        Verificar()
    }
})

function Verificar(){
    let n1 = parseFloat(document.querySelector('input#n1').value)
    let n2 = parseFloat(document.querySelector('input#n2').value)
    let cargH = parseFloat(document.querySelector('input#cargH').value)
    let freq = parseFloat(document.querySelector('input#freq').value)

    if([n1,n2,cargH,freq].some(isNaN)){
        alert('Valor invalido!')
        return
    }

    let media = (n1 + n2) / 2

    let freqMin = cargH * 0.75
    
    let result = document.querySelector('div#result')

    if((media>= 6) && (freq >= freqMin)){
        result.innerHTML = `Aluno aprovado`
    }else{
        result.innerHTML = `Aluno reprovado`
    }

}