function createProduct (nome,preco,categoria){
    const products = {}

    this.nome = nome
    this.preco = preco
    this.categoria = categoria

}

let product1 = new createProduct("teclado",30,"eletronico")
console.log(product1)