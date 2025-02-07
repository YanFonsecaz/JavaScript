function fibonaci(n1){
    if(n1 <= 0){
        return []
    }
    if(n1 === 1){
        return[0]
    }
    let result = [0,1]
    for(let i = 2; i < n1; i++){
        result.push(result[i-1] + result[i-2])
    }
    return result

}

console.log(fibonaci(5))