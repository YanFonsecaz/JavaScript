function invertName(n1){
    let nomeInvert = ''
    for(let i = n1.length - 1; i >= 0; i--){
        nomeInvert += n1[i]
    }
    return nomeInvert
}

let nome = "JavaScript"
console.log(invertName(nome))