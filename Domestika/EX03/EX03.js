    let figura = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"]
    let figuraTotal = figura.concat(figura)
    
    function aleatorio(){
        let resultado  
            resultado = figuraTotal.sort(function(){
                return 0.5 - Math.random()
            })
            return resultado
    }

    function exibirFigurinha() {
        let mesa = document.querySelector('#mesa')
        let figurasAlea = aleatorio()
        mesa.innerHTML = ''

        figurasAlea.forEach(function (elemento) {
            let desenhos = document.createElement('div')
            desenhos.innerHTML = "<div class='tarjeta'>" + "<div class = 'tarjeta__contenido' >" + elemento
                + "</div>" + "</div>"
            mesa.appendChild(desenhos)
        })
    }
    let botao = document.createElement('button')
    botao.id = 'Baralha'
    botao.textContent = 'Baralha Cartas'
    document.body.appendChild(botao)

    botao.addEventListener('keydown', function(evento){
        if(evento.key === 'Enter'){
            exibirFigurinha()
        }
    })
    botao.addEventListener('click', exibirFigurinha)

    function descubrir() {
        this.classList.add("descubierta")
    }

    document.querySelectorAll('.tarjeta').forEach(function (elemento){
        elemento.addEventListener('click', descubrir)
    })

