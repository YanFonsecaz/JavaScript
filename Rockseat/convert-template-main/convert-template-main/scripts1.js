//cotação de moedas do dia
const USD = 4.87
const EUR = 5.21
const GBP = 6.08

//Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Manipulando o Input amount para receber apenas numeros
amount.addEventListener("input", () => {

    // Validando o input se tem apenas numeros
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break;
    }
})

// Função para converter a moeda

function convertCurrency(amount, price, symbol) {
    try {
        //Adicionando simbolo e preço da moeda dinamicamente
        description.textContent = (`${symbol} 1 = ${formatCurrencyBRL(price)}`)

        //Calculo do valor total
        let total = amount * price

        //Verificando se não é um numero
        if(isNaN(total)){
            alert("Valor invalido, por favor adicione o valor correto")
            return
        }
        // Formata o valor total
        total = `${formatCurrencyBRL(total).replace("R$","")}`

        //exibindo o valor total
        result.textContent = `${total} Reais`

        //adicionando uma class que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

    } catch (error) {
        // Remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possivel converter, tente mais tarde!!")
    }
    // formata moeda para real
    function formatCurrencyBRL(value) {
        // convert para number para utilizar o toLocal
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }
}



