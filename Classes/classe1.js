class Person {
    constructor(name) {
        console.log("Ola", name)
    }
}

const person = new Person("Yan")


//////////////////////////////////////////////////////

class User {
    constructor(nome, email) {
        this.name = nome
        this.email = email
    }
    sendEmail() {
        console.log("é email enviado para",
            this.name,
            "no endereço",
            this.email
        )
    }

}

const user = new User("yan", "yanfonseca@gmail.com")
user.sendEmail()
