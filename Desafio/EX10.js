function InvertString(n1){
    let invertName = ''
    for(let i = n1.length - 1; i >= 0  ; i--){
        invertName += n1[i]
    }
    if(n1===invertName){
        return 'verdeiro' + " " + invertName
    }else{
        return 'falso' + " " + invertName
    }
}
let nome = "arara"
console.log(InvertString(nome))