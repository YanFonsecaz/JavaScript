function calcArea(){
    let raio = Number(document.querySelector('input#raio').value)
    let result = document.querySelector('div#result')

    if(isNaN(raio) || raio <= 0){
        alert('Valor invalido!!')
        return
    }

    let VEF = ((4/3) * 3.1416) * raio **3

    result.innerHTML = ''

    result.innerHTML =`O resultado é ${VEF.toFixed(2).replace('.',',')}`
}