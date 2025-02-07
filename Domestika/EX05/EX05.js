let figurinhas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
let figurinhaTotal = figurinhas.concat(figurinhas)

function aleatorio(){
    let resultado;
    resultado = figurinhaTotal.sort(function (elemento){
        return 0.5 - Math.random()
    })
    return resultado
}

function exibir() {
    let mesa = document.querySelector('#mesa')
    let baralhaCartas = aleatorio()
    mesa.innerHTML = ''

    baralhaCartas.forEach(function (elemento) {
        let cartas = document.createElement('div')
        cartas.innerHTML = "<div class = 'tarjeta'>" + "<div class = 'tarjeta__contenido'>" + elemento + "</div>" + "</div>"
        mesa.appendChild(cartas)
    })
    document.querySelectorAll('.tarjeta').forEach(function (elemento){
        elemento.addEventListener('click',virarCartas)
    })
}
function virarCartas() {
    this.classList.add('descubierta')
}
    let botao = document.createElement('button')
    botao.id = 'botao'
    botao.textContent = 'Baralha Cartas'
    document.body.appendChild(botao)

    botao.addEventListener('click', exibir)
    botao.addEventListener('keydown', function(evento){
        if(evento.key === 'Enter'){
            exibir()
        }
    })
