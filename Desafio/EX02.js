function soma(){
    let vetor = [1, 2, 3, 4]
    let soma = 0
    for(let i = 0; i < vetor.length ; i++){
        soma += vetor[i]
    }
    return soma
}
console.log(soma())