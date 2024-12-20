function carregar(){
    let msg = document.querySelector('div#msn');
    let foto = document.querySelector('img#image');
    let data = new Date();
    let horas = data.getHours();
    msg.innerHTML = 'São Exatamente '+horas+' Horas';
    if(horas >= 0 && horas < 12){
        foto.src = 'manha.png';
    }else if(horas >= 12 && horas < 18){
        foto.src = 'tarde.png';
    }else{
        foto.src = 'noite.png';
    }
}