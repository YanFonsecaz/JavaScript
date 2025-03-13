let obj = []
let index = 300

try {
    if (!obj.includes(17)) {
        throw new Error("O numero 17 nao esta disponivel.")
    }
    if (index > 99) {
        throw new RangeError("Numera esta fora do intervalo. escolha um numero entre 0 e 99")
    }
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Metodo indisponivel")
        console.log(error)
    } else if (error instanceof RangeError) {
        console.log(error.message)
    }else {
        console.log("nao foi possivel realizar a ação")
    }
}