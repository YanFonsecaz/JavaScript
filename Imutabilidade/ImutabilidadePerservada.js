const book = {
    tutle: "Objetos Imutaveis",
    category: "javascript",
    author:{
        name: "Rodrigo",
        email: "rodrigo@email.com",
    },
}

const updatedBook = {
    ...book,
    title:"criando um front-end moderno com HTML",
    category:"HTML",
    type: "programming",
}


// base da imutabilidade
console.log(book)

//imuntabilidade atualizada.
console.log(updatedBook)