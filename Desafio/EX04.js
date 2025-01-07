function contarString(text) {
    let textoSemEs = text.replace(/[ !]/g, "")
    return textoSemEs.length
}
let texto = "Ola, Mundo!"
console.log(contarString(texto))