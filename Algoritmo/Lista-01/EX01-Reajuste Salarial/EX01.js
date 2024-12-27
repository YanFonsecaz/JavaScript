let result = document.querySelector('div#result');

function calcSalario() {
    let nome = document.querySelector('input#nome').value;
    let salario = document.querySelector('input#salario').value;
    let salarioUsu = parseInt(salario)
    if (nome === "" || /\d/.test(nome)) {
        alert('Digite seu nome sem numeros!!')
        return
    }
    
    if (isNaN(salario) || salario <=0) {
        alert('Digite um valor valido!!')
        return
    }
    result.innerHTML = ''

    let salarioRea = salarioUsu*0.285
    salarioFinal = salarioUsu + salarioRea

    result.innerHTML = `${nome} seu salarial atual é ${salarioUsu.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})} ocorreu um reajuste de 28,5% e seu salario agora é ${salarioFinal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
}