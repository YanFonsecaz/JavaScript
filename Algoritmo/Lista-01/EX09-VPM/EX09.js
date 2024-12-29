function calcArea(){
    let lar1 = Number(document.querySelector('input#lar1').value)
    let lar2 = Number(document.querySelector('input#lar2').value)
    let lar3 = Number(document.querySelector('input#lar3').value)
    let result = document.querySelector('div#result')

    if(isNaN(lar1) || lar1 <= 0){
        alert('valor invalido!!');
        return
    }
    if(isNaN(lar2) || lar2 <= 0){
        alert('valor invalido!!');
        return
    }
    if(isNaN(lar3) || lar3 <= 0){
        alert('valor invalido!!');
        return
    }
    result.innerHTML = ''

    let VPM = lar1 * lar2 * lar3

    result.innerHTML = `O resultado final é ${VPM}`
}