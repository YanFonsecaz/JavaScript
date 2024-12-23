function calcular(){
    let inputNumber = document.querySelector('input#numero').value;
    let number = parseInt(inputNumber);
    if(isNaN(number)){
        alert('Adicione um valor');
    }
    let selectHTML = document.querySelector('select#valor');
    selectHTML.innerHTML = ''
    for(let i = 1; i<11;i++){
        let optionAdd = document.createElement('option');
        optionAdd.text = `${number} x ${i} = ${number * i}`
        selectHTML.appendChild(optionAdd);
        
    }
}