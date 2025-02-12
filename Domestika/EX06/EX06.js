let figurinhas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
let figurinhaTotal = figurinhas.concat(figurinhas)

function aleatorio() {
    let figurinhasAlea
    figurinhasAlea = figurinhaTotal.sort(function (elemento) {
        return 0.5 - Math.random()
    })
    return figurinhasAlea
}

function exibir() {
    let mesa = document.querySelector('#mesa')
    mesa.innerHTML = ''
    let cartaAlea = aleatorio()

    cartaAlea.forEach(function (elemento) {
        let cartas = document.createElement('div')
        cartas.innerHTML = "<div class= 'tarjeta'>"
            + "<div class = 'tarjeta__contenido'>"
            + elemento +
            "</div>" + "</div>"
        mesa.appendChild(cartas)
    })
    document.querySelectorAll('.tarjeta').forEach(function (elemento) {
        elemento.addEventListener('click', virarCartas)
    })
}
function virarCartas() {
    this.classList.add('descubierta')
}

let botao = document.createElement('button')
botao.id = 'botao'
botao.textContent = 'Baralhar'
document.body.appendChild(botao)

botao.addEventListener('click', exibir)

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        exibir()
    }
})