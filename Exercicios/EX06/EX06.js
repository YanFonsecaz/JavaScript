function calcular() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let result = document.querySelector('div#result');
    let ano = document.querySelector('input#ano').value;
    let anoUsu = parseInt(ano);

    if (anoUsu === "" || isNaN(anoUsu)) {
        alert('Informe um valor valido');
        return;
    }

    if (anoUsu <= 0 || anoUsu > anoAtual) {
        alert('Informe sua data de nascimento correta');
        return;
    }

    let genSelec = document.querySelectorAll('input[name = "radioSex"]');
    if (!genSelec[0].checked && !genSelec[1].checked) {
        alert('Selecione um Sexo');
        return;
    }

    let idade = anoAtual - anoUsu;
    let genero = '';
    let imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto');

    if (genSelec[0].checked) {
        genero = 'Masculino';
        if (idade >= 0 && idade < 10) {
            imagem.setAttribute('src', 'criançaHomem.jpg');
        } else if (idade < 21) {
            imagem.setAttribute('src', 'jovemHomem.jpg');
        } else if (idade < 50) {
            imagem.setAttribute('src', 'adultoHomem.jpg');
        } else {
            imagem.setAttribute('src', 'idosoHomem.jpg');
        }
    } else if (genSelec[1]) {
        if (idade >= 0 && idade < 10) {
            imagem.setAttribute('src', 'criançaMulher.jpg');
        } else if (idade < 21) {
            imagem.setAttribute('src', 'jovemMulher.jpg');
        } else if (idade < 50) {
            imagem.setAttribute('src', 'adultoMulher.jpg');
        } else {
            imagem.setAttribute('src', 'idosoMulher.jpg');
        }
    }
    result.style.textAlign = 'center';
    result.innerHTML = `Identificamos ${genero} e sua idade: ${idade}`;
    result.appendChild(imagem);
}