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
        document.body.style.background = 'rebeccapurple'
    }else if(data.getHours() < 18){
        imagem.setAttribute('src','tarde.png');
        document.body.style.background = 'brown'
    }else{
        imagem.setAttribute('src','noite.png');
        document.body.style.background = 'gray'
    }
    divImagem.appendChild(imagem);
    divImagem.style.textAlign = 'center'
}