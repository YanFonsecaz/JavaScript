const users = {
    email: "rodrigo@email.com",
    age: 18,
    name:{
        first_name:"rodrigo",
        surname: "Gonçalves",
    },
    adress:{
        street: "rua X",
        number: 23,
        city: "Maringa",
        postal_code: 12345-123,
    },
    message: () =>{
        // outra maneira é o this.name porem não pode usar o arrow function
        console.log(`Ola ${users.name}`);
    },
}
console.log(users.email);
// acessando propriedades do objeto
console.log(users.name.first_name);
// Executando o metado do objeto;
users.message();

// opitional chanaine ao adicionar ? apos a propriedade faz com o javascript procure se existe essa propriedade se nao existir ele vai trazer undefined ao inves de error

console.log(users?.adress)
console.log(users?.adress?.street)

users.message?.()

// Operador de coalencencia nula
// Quando o conteudo da variavel for nula ou underfined vai ser trazido a mensagem ao lado das ??

let content = null
console.log(content ?? "Conteudo Padrão")
// pode ser usado tambem em objetos

const user = {
    name: "Rodrigo",
    avatar: undefined,
}

console.log(user.avatar ?? "default.png")


//Funcao construtura

// instancia
function createProduct(name){
    const product = {}
    product.name = name
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }
    return product
}

const product = new createProduct("Teclado")
console.log(product.name)
product.details()


// outra maneira de usar

function Person(name){
    this.name = name
    this.message = function (){
        console.log(`Ola, ${this.name}`)
    }
}

const person1 = new Person("Rodrigo")
console.log(person1.name)
person1.message()