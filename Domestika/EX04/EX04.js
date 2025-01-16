let figuras = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
let figurasTotal = figuras.concat(figuras)

function Aleatorio() {
    let resultado;
    resultado = figurasTotal.sort(function () {
        return 0.5 - Math.random()
    })
    return resultado
}

function exibir() {
    let mesa = document.querySelector('#mesa')
    let baralhaCartas = Aleatorio()
    mesa.innerHTML = ""

    baralhaCartas.forEach(function (elemento) {
        let cartas = document.createElement('div')
        cartas.innerHTML = "<div class='tarjeta'>" + "<div class='tarjeta__contenido'>" + elemento + "</div>" + "</div>"
        mesa.appendChild(cartas)
    })

    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
        elemento.addEventListener("click", virarCartas)
    })
}
let botao = document.createElement('button')
botao.id = 'baralha'
botao.textContent = 'Baralhar'
document.body.appendChild(botao)

botao.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        exibir()
    }
})

botao.addEventListener('click', exibir)

function virarCartas() {
    this.classList.add("descubierta")
}




