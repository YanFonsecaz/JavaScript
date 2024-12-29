function calcArea(){
    let largura =Number(document.querySelector('input#largura').value)
    let altura = Number(document.querySelector('input#altura').value)
    let result = document.querySelector('div#result')
    if(isNaN(largura) || largura <= 0){
        alert('Informe um valor valido!!')
        return
    }
    if(isNaN(altura) || largura <= 0){
        alert('Informe um valor valido!!')
        return
    }
    
    result.innerHTML = ''

    let VPD = (largura * largura) * (altura / 3)

    result.innerHTML = `O resultado da area ${VPD.toFixed(2).replace('.',',')}`
}