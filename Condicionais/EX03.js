console.log('Descubra o dia da semana');
var horas = new Date();
var diaSemana = horas.getDay();
console.log('0 - Domingo 1-Segunda 2-Terça 3-Quarta 4-Quinta 5-Sexta 6-Sabado');
switch (diaSemana){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Valor invalido');
        break;
}