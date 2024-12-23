function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let result = document.querySelector('div#result');
    let ano = document.querySelector('input#ano').value;
    if (ano === "" || isNaN(ano)) {
        alert('Digite um valor valido!!')
    }
    let anoUsua = parseInt(ano);
    if (anoUsua > anoAtual || anoUsua <= 0) {
        alert('Digite um ano valido!!');
    } else {
        let genSelec = document.getElementsByName('radiosex');
        let anoResult = anoAtual - anoUsua;
        let genero = '';
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto')
        if (genSelec[0].checked) {
            genero = 'Masculino';
            if (anoResult >= 0 && anoResult < 10) {
                //criança
                imagem.setAttribute('src', 'criançaHomem.jpg');
            } else if (anoResult < 21) {
                //jovem
                imagem.setAttribute('src', 'jovemHomem.jpg');
            } else if (anoResult < 50) {
                //adulto
                imagem.setAttribute('src', 'adultoHomem.jpg');
            } else {
                //idoso
                imagem.setAttribute('src', 'idosoHomem.jpg');
            }
        } else if (genSelec[1].checked) {
            genero = 'Feminino';
            if (anoResult >= 0 && anoResult < 10) {
                imagem.setAttribute('src', 'criançaMulher.jpg');
            } else if (anoResult < 21) {
                imagem.setAttribute('src', 'jovemMulher.jpg');
            } else if (anoResult < 50) {
                imagem.setAttribute('src', 'adultoMulher.jpg');
            } else {
                imagem.setAttribute('src', 'idosoMulher.jpg');
            }
        }
        result.style.textAlign = 'center';
        result.innerHTML = `Identificamos Sexo: ${genero} e a Idade: ${anoResult}`;
        result.appendChild(imagem);
    }

}