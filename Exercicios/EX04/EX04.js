function carregar(){
    let mensagemHorario = document.querySelector('div#msg');
    let foto = document.querySelector('img#imagem');
    let data = new Date();
    let hora = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    mensagemHorario.innerHTML = 'Horario Atual '+hora+' Horas';
    if(hora >= 0 && hora<12){
        foto.src = 'manha.png';
    }else if(hora > 12 && hora <18){
        foto.src = 'tarde.png';
    }else{
        foto.src = 'noite.png'
    }
}