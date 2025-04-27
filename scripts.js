const buttonItem = document.querySelector("#botao");
const divItem = document.querySelector("#divItem");
const newItem = document.querySelector("#newItem");

buttonItem.addEventListener("click", (event) => {
    //event.defaultPrevented()
    if (newItem.value !== "") {
        const newItens = newItem.value
        let divNewItem = document.createElement("div");
        divNewItem.classList.add("form-check", "justify-content-between", "d-flex")
        divItem.appendChild(divNewItem);

        let newCheckBox = document.createElement("input");
        newCheckBox.classList.add("form-check-input");
        newCheckBox.type= "checkbox"

        let newLabelItem = document.createElement("label");
        newLabelItem.classList.add("form-check-label");
        newLabelItem.innerHTML = newItens.value

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-secundery","py-0","btn-light")
        deleteButton.setAttribute("type","button")
        deleteButton.innerHTML = ('<i class="bi bi-trash"></i>')

        deleteButton.addEventListener("click", ()=>{
            divItem.removeChild(divNewItem);
        })
        divNewItem.appendChild(newCheckBox);
        divNewItem.appendChild(newLabelItem);
        divNewItem.appendChild(deleteButton);
        
        // Adiciona o novo item à divItem
        divItem.appendChild(divNewItem);
        
        // Limpa o campo de entrada
        newItem.value = "";
    }
})


