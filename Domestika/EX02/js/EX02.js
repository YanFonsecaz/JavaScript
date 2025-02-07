var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";
  tarjetasBarajadas.forEach(function (elemento){
    let carta = document.createElement("div")
     carta.innerHTML = "<div class='tarjeta'>" +
     "<div class='tarjeta__contenido'>" +
     elemento +
     "</div>" +
     "</div>";
     mesa.appendChild(carta)
  })

}

let botao = document.createElement('button')
botao.id = 'butao-distibuidor'
botao.textContent = 'Destribuir Cartas'
document.body.appendChild(botao);

botao.addEventListener('keydown', function (evento){
  if(evento.key === 'Enter'){
    reparteTarjetas()
  }
})
botao.addEventListener('click', reparteTarjetas)


function descubrir() {
  this.classList.add("descubierta");
}


document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});
