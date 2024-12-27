function soma(){
    let v1= document.querySelector('input#v1').value;
    let v2 = document.querySelector('input#v2').value;
    let result = document.querySelector('div#result');
    if(v1 ==="" || v2===""){
        alert('Preencha os valores!!')
        return
    }
    if(isNaN(v1) || Number(v1)<0){
        alert('Valor invalido!!')
        return
    }
    if(isNaN(v2) || Number(v2) <0){
        alert('Valor Invalido!!')
        return
    }
    let v1F = Number(v1)
    let v2F = Number(v2)
    let soma = v1F + v2F
    result.innerHTML = ''
    result.innerHTML = `A soma de ${v1} + ${v2} = ${soma}`
    
}