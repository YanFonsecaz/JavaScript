    var grupoDesenhos = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
    var totalDesenhos = grupoDesenhos.concat(grupoDesenhos);
    function Desenhos() {
    let mesa = document.querySelector("#mesa");
    mesa.innerHTML = "";
    totalDesenhos.forEach(function (elemento) {
        let desenhos = document.createElement("div");
        desenhos.innerHTML =
        "<div class='tarjeta'>" +
        "<div class='tarjeta__contenido'>" +
        elemento +
        "</div>" +
        "</div>";
        mesa.appendChild(desenhos);
    });
    }

    function descobrir() {
    this.classList.add("descubierta");
    }

    Desenhos();

    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descobrir);
    });
