document.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        veriSalario()
    }

})

function verificacao(name){
    const regex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/
    return regex.test(name)
}

function veriSalario(){
    let nome = document.querySelector('input#nome').value.trim()
    let idade = parseInt(document.querySelector('input#id').value)
    let sal = parseFloat(document.querySelector('input#salario').value)

    if(!verificacao(nome)){
        alert('Nome Invalido')
        return
    }
    if(isNaN(idade) || idade<0){
        alert('Idade Invalida')
        return
    }
    if(isNaN(sal) || sal<0){
        alert('Salario Invalido')
        return
    }
    
    let result = document.querySelector('div#result')
    result.innerHTML = ''

    if(idade <= 35){
        result.innerHTML = `Sua idade é ${idade} aumento de 12% salario atual ${sal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} salario reajustado ${(sal + (sal * 0.12)).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`
        return
    }
    if(idade == 36 || idade <=50){
        result.innerHTML = `Sua idade é ${idade} aumento de 14.5% salario atual ${sal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} salario reajustado ${(sal + (sal * 0.145)).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`
        return
    }
    if(idade > 50){
        result.innerHTML = `Sua idade é ${idade} aumento de 17% salario atual ${sal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} salario reajustado ${(sal + (sal * 0.17)).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`
        return
    }
    
    
}