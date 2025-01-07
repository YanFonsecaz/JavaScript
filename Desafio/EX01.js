function tabuada(n1) {
    let vetor = []

    for (let i = 1; i < 11; i++) {
        vetor.push(n1 * i)
    }
    return vetor
}
console.log(tabuada(3))