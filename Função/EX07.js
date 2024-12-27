function calcFatorial(v1=0){
    let fato = 1
    for( i = v1; i>1; i--){
        fato *= i
    }
    return fato
    
}
console.log(calcFatorial(5))