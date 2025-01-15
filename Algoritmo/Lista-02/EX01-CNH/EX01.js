document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    VeriCNH();
  }
});

function validacao(name) {
  const regex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/;
  return regex.test(name);
}

function VeriCNH() {
  let idade = parseInt(document.querySelector("input#id").value);
  let nome = document.querySelector("input#nome").value.trim();

  if (!validacao(nome)) {
    alert("Nome invalido");
    return;
  }
  if (isNaN(idade) || idade <= 0) {
    alert("Idade invalida");
    return;
  }
  let result = document.querySelector("div#result");
  result.innerHTML = "";
  if (idade >= 18) {
    result.innerHTML = `${nome} sua idade é de ${idade} esta apto a tirar CNH`;
  } else {
    result.innerHTML = `${nome} sua idade é de ${idade} nao esta apto a tirar CNH`;
  }
}
