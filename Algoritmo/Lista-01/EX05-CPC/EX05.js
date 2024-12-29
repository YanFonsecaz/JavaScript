function calcArea(){
    let raio = Number(document.querySelector('input#raio').value)
    let result = document.querySelector('div#result')

    if(isNaN(raio) || raio <= 0){
        alert('Digite um valor valido!!');
        return
    }
    let areaRaio = 3.1416 * (raio + raio)
    result.innerHTML = ''
    result.innerHTML = `O Resultado da area é ${areaRaio.toFixed(2).replace('.',',')}`
}