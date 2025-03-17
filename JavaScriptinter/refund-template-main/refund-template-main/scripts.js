//Seleciona os elementos do formulario
const form = document.querySelector("form")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")
const amount = document.querySelector("#amount")

// Seleciona os elementos da Ul

const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span")
const expensesTotal = document.querySelector("aside header h2")


//Captura o evento do input para formatar o valor

amount.addEventListener("input", () => {

    // Obtem o valor atual do input e remove os caracteres nao numericos
    const regex = /\D/g
    let value = amount.value.replace(regex, "")

    // Transforma o valor em centavos (exemplo:150/100 = 1.5 que é equivalente a R$1.50)
    value = Number(value / 100)

    // Atualiza o valor do input
    //amount.value = value
    amount.value = formatCurrencyBRL(value)
})

function formatCurrencyBRL(value) {
    // Formata o valor no padrao BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    // Retorna o valor formatado
    return value
}

// Captura o evento de submit do formulario para obter os valores
form.addEventListener("submit", (event) => {
    // Previne o comportamento padrao de recarregar pagina
    event.preventDefault()
    // criando o objeto com os detalhes da nova despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    // chama a função que ira adicionar o item a lista
    expenseAdd(newExpense)
})
// Adiciona um novo item na lsita.
function expenseAdd(newExpense) {
    try {
        // Cria o elemento de li para adicionar o item (li )na lista (ul)
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o icone da categoria.
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        // Cria info da despesa
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        // Cria o nome da despesa
        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        // Cria a categoria da despensa.
        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        // Cria o valor da despensa.

        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

        // Cria o icone de remover

        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "remover")


        // Adiciona o nome e categoria na div das informações da despensa

        expenseInfo.append(expenseName, expenseCategory)

        //Adiciona as informaçoes no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)
        expenseList.append(expenseItem)

        // limpa o formulario para adicioanr um novo item
        formClear()

        // Atualiza os totais
        updateTotals()
        


    } catch (error) {
        alert("Nao foi possivel atualizar a lista de despensa")
        console.log(error)
    }
}

// Atualiza os totais

function updateTotals() {
    try {
        // Recupera todos os itens (li) da lista (ul)
        const items = expenseList.children

        // Atualiza a quantidade itens da lista
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

        // Variavel para incrementar o total.

        let total = 0

        // Percorrer cada (li) da lista (ul)
        for (let item = 0; item < items.length; item++) {
            const itemAmount = items[item].querySelector(".expense-amount")

            // Remover caracteres nao numerericos e substitui a virgula pelo ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

            // Converter o valor para float

            value = parseFloat(value)

            //Verificar se e um numero valido

            if (isNaN(value)) {
                return alert("Não foi possivel calcular o total. o valor nao parecer ser um numero")
            }

            // Incrementar o valor total

            total += Number(value)
        }

        // Cria a span para adicionar o R$ formatado.

        const symbolBRL = document.createElement("small")
        symbolBRL.textContent = "R$"

        // Formatada o valor e remove o R$ que sera exibido pela small com o um estilo customizado
        total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")

        // Limpa o conteudo do elemento
        expensesTotal.innerHTML = ""

        // Adiciona o simbolo da moeda e o valor total formatado
        expensesTotal.append(symbolBRL,total)

    } catch (error) {
        console.log(error)
        alert("Não foi possivel atualizar os totais")
    }
}

// Evento que captura o clique nos itens da lista.
expenseList.addEventListener("click", function(event){

    // Verificar se o elemento clicado e o icone de remover
    if(event.target.classList.contains("remove-icon")){
        
        // Obtem a li pai do elemento clicado
        const item = event.target.closest(".expense")

        // Remove o item da lista
        item.remove()

        // atualiza os totais
        updateTotals()
    }
})

function formClear(){

    expense.value = ""
    category.value = ""
    amount.value = ""

}