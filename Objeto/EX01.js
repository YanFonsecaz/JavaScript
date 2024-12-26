let amigo ={
    nome:'jose',
    sexo: 'M',
    peso:85.4,
    engorda(p=0){
        this.peso += p
    }
}
console.log(amigo)
amigo.engorda(2)
console.log(`${amigo.nome} pesa: ${amigo.peso} KG`)
