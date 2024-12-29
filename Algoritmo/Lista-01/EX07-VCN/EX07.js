function calcArea(){
    let raio = Number(document.querySelector('input#raio').value)
    let altura = Number(document.querySelector('input#altura').value)
    let result = document.querySelector('div#result')

    if(isNaN(raio) || raio <= 0){
        alert('Digite um valor valido!!');
        return
    }
    if(isNaN(altura) || altura <= 0){
        alert('Digite um valor valido!!');
        return
    }
    let areaRaio = (3.1416 * (raio**2)/3) * altura
    result.innerHTML = ''
    result.innerHTML = `O Resultado da area é ${areaRaio.toFixed(2).replace('.',',')}`
}