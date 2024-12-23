function calcular() {
    let inputInicio = document.querySelector('input#inicio').value;
    let inicio = parseInt(inputInicio)
    if (isNaN(inicio)) {
        alert('Adicione um valor valido!!');
        return;
    }

    let inputFim = document.querySelector('input#fim').value;
    let fim = parseInt(inputFim)
    if (isNaN(fim)) {
        alert('Adicione um valor valido!!');
        return;
    }

    let inputPassos = document.querySelector('input#passos').value;
    let passos = parseInt(inputPassos)
    if (isNaN(passos) || passos <= 0) {
        passos = 1;
    }
    let result = document.querySelector('div#result');
    result.innerHTML = ''
    for (i = inicio; i <= fim; i += passos) {
        result.innerHTML += ` ${i} &#10003; `;
    }

}