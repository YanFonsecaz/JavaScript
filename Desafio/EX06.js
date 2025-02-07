function contaImparPar(n1 = 0, n2 = 0) {
    let vetor = []
    for (let i = 0; i < n2; i++) {
        vetor.push(i)
    }

    let impar = 0
    let par = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par += 1
        } else {
            impar += 1
        }
    }
    console.log(`${impar} - ${par}`)
}

console.log(contaImparPar(1, 10))