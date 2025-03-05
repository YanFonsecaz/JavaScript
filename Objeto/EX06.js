const user = {
    nome: "Yan",
    email: "yan@email.com",
    exibirInfo: function(){
        console.log(`Meu nome é ${this.nome} e meu email é ${this.email}`)
    }
}
user.exibirInfo()