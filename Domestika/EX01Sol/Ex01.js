function valiNumero(n1) {
    let ano = new Date().getFullYear()
    if (isNaN(n1) || n1 < 1900 || n1 > ano) {
        return false
    }
    return true

}

function valiNome(name) {
    const regex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/;
    return regex.test(name)
}


function entradaDados(evento) {
    evento.preventDefault()
    let nome = document.querySelector("#nome").value.trim()
    let bemvindo = document.querySelector("#bienvenida")

    if (!valiNome(nome)) {
        return bemvindo.innerHTML = "Nome Invalido"
    }

    let anoNasc = parseInt(document.querySelector("#nasc").value.trim())
    let ano = new Date().getFullYear()

    if (!valiNumero(anoNasc)) {
        return bemvindo.innerHTML = "Ano Invalido"
    }


    let idade = ano - anoNasc
    let mensagem
    let mensagemIdade;
    bemvindo.innerHTML = ""

    if (idade > 30) {
        mensagemIdade = "Idoso"
    } else if (idade < 30) {
        mensagemIdade = "Jovem"
    } else {
        mensagemIdade = "Nao acredito!"
    }
    mensagem = `Ola, ${nome} voce tem ${idade} anos e voce é ${mensagemIdade} `
    bemvindo.innerHTML = mensagem
}
let meuForm = document.querySelector("#formulario")
meuForm.addEventListener('submit', entradaDados)
