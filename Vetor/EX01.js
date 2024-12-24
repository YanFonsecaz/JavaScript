let num = [ 5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`a primeira posição do vetor é ${num[0]}`)
let index = num.indexOf(3)
console.log(`posição do valor encontrado ${index}`)
let indexError = num.indexOf(15)
console.log(`posição do valor nao encontrado ${indexError}`)
for(let i = 0; i<num.length; i++){
    console.log(`valores ${num[i]}`)
}