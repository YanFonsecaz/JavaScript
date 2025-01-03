document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        calcDes()
    }
})

function validacao(nome){
    const regex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/;
    return regex.test(nome)
}

function calcDes(){
    let nome = document.querySelector('input#nome').value.trim()
    let idade = parseInt(document.querySelector('input#id').value)
    let salario = parseFloat(document.querySelector('input#sal').value)
    let prof = document.querySelector('input#prof').value.trim()

    if(!validacao(nome)){
        alert('Nome Invalido')
        return
    }

    if(isNaN(idade) || idade<=0){
        alert('Idade incorreta')
        return
    }

    if(isNaN(salario) || salario<=0){
        alert('Salario incorreta')
        return
    }
    if(!validacao(prof)){
        alert('profissao Invalida')
        return
    }

    let result = document.querySelector('div#result')

    result.innerHTML = ''
    result.innerHTML = `${nome} com a ${prof}, tem o salario atual de ${salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} e foi descontado ${(salario * 0.013).toLocaleString('pt-br',{style:'currency', currency:'BRL'})} seu salario final é ${(salario - (salario * 0.013)).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`
}
