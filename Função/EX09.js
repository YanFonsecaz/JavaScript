function encontreMaior(_vetor){
    let maior = 0
    for(i = 0; i< _vetor.length;i++){
        if(maior<_vetor[i]){
            maior = _vetor[i]
        }
    }
    return maior
}

console.log(encontreMaior([3, 7, 1, 9, 2]))