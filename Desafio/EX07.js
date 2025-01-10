function removerRep(n1){
    let valorUni = []
    for(let i = 0; i < n1.length ; i++){
        if(!valorUni.includes(n1[i])){
            valorUni.push(n1[i])
        }
    }
    return valorUni
}
let numeros = [1, 2, 2, 3, 4, 4, 5, 6, 6]
let valor = removerRep(numeros)
console.log(valor)