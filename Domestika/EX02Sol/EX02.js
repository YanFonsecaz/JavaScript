let figuras = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
let figurasTotal = figuras.concat(figuras)
function desenhos() {
    let mesa = document.querySelector("#mesa");
    mesa.innerHTML = ''

    figurasTotal.forEach(function (elemento) {
        let desenhos = document.createElement('div');
        desenhos.innerHTML = 
        "<div class = 'tarjeta'>" + 
        "<div class = 'tarjeta__contenido'>"
         + elemento + 
         "</div>" + 
         "</div>"
         mesa.appendChild(desenhos)

    })

}

function descobrir(){
    this.classList.add("descubierta")
}

desenhos()

document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", descobrir);
})