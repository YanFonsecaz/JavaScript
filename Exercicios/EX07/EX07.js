function verificar(){
    let data = new Date();
    let divHoras = document.querySelector('div#hora');
    let divImagem= document.querySelector('div#localImagem');
    divHoras.innerHTML = `Horario é ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    divHoras.style.textAlign = 'center';
    let imagem = document.createElement('img');
    imagem.setAttribute('id','foto');
    if(data.getHours()> 0 && data.getHours() < 12 ){
        imagem.setAttribute('src','manha.png');
    }else if(data.getHours() < 18){
        imagem.setAttribute('src','tarde.png');
    }else{
        imagem.setAttribute('src','noite.png');
    }
    divImagem.appendChild(imagem);
    divImagem.style.textAlign = 'center'
}