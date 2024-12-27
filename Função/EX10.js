function geraFubonachi(n){
    if(n<=0){
        return  [] 
    }
    if(n===1){
        return [0]
    }
    let vetor = [0,1]
    for(i = 2; i < n; i++){
        vetor.push((vetor[i-1]+vetor[i-2]))
        console.log(i)
    }
    return vetor
        
}
console.log(geraFubonachi(5))
