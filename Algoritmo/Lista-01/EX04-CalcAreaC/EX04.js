function calcArea(){
    let raio = Number(document.querySelector('input#raio').value)
    let result = document.querySelector('div#result')

    if(isNaN(raio) || raio <= 0){
        alert('Digite um valor valido!!');
        return
    }
    let areaRaio = 3.1416 * (raio ** 2)
    result.innerHTML = ''
    result.innerHTML = `O Resultado da area do circulo é ${areaRaio.toFixed(2).replace('.',',')}`
}