class MyCustomError {
    constructor(message){
        this.message = `CLASSE DE RRO CUSTOMIZADA: ${message}`
    }
}

try{
    throw new MyCustomError("Erro Personalizado Lançado")
} catch (error){
    if(error instanceof MyCustomError){
        console.log(error.message)
    } else {
        console.log("Nçao foi possivel executar!!")
    }
}