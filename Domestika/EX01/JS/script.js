function valiNome(nome) {
  const regex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/;
  return regex.test(nome);
}
function validacao(n1) {
  if (isNaN(n1) || n1 < 0) {
    return "valor invalido";
  }
  return true;
}
function coletaDados(evento) {
  evento.preventDefault();
  let nome = document.querySelector("#nome").value;
  let nasc = parseInt(document.querySelector("#nasc").value.trim());
  let bemvindo = document.querySelector("#bemvindo");
  let ano = new Date().getFullYear();
  if (!validacao(nasc) || nasc < 1900 || nasc > ano) {
    bemvindo.innerHTML =
      "Por favor, insira um ano de nascimento válido (entre 1900 e o ano atual).";
    return;
  }
  if (!valiNome(nome) || nome.trim() === "") {
    bemvindo.innerHTML =
      "Por favor, insira um nome válido (apenas letras e espaços).";
    return;
  }

  let idade = ano - nasc;
  let mensagem;
  let mensagemIdade;

  if (idade > 30) {
    mensagemIdade = "Idoso";
  } else if (idade < 30) {
    mensagemIdade = "Jovem";
  } else {
    mensagemIdade = "Nao acredito!!";
  }

  mensagem =
    "<p>Ola, " + nome + ", tenho " + idade + " anos " + mensagemIdade + "</p>";
  bemvindo.innerHTML = mensagem;
}

let meuForm = document.querySelector("#formulario");
meuForm.addEventListener("submit", coletaDados);
