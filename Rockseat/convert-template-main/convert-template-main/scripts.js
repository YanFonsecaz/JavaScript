const USD = 5.73
const EUR = 5.99
const GBP = 7.38

const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

amount.addEventListener("input", () => {

    const regex = /\D+/g

    amount.value = amount.value.replace(regex, "")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    switch (currency.value) {
        case "USD":
            formatValue(amount,USD,"R$")
            break;
        case "EUR":
            formatValue(amount,EUR,"€")
            break;
        case "GBP":
            formatValue(amount,GBP,"£")
            break;
        default:
            console.log("Valor Invalido")
            break;
    }
})

function formatValue(amount,price,symbol){
        try {
            description.textContent = `${symbol} 1 = ${FormatCoin(price)}`
            let amountConvert = Number(amount.value)
            let total = amountConvert * price
            if(isNaN(total)){
                alert("O valor não um valor numerico")
                return
            }
            result.textContent = `${FormatCoin(total).replace("R$","")} Reais`
            
            footer.classList.add("show-result")
        } catch (error) {
            footer.classList.remove("show-result")
            alert("Não foi possivel converter o valor!!")
        
    }
}

function FormatCoin(salario){
    const numberConvert = parseFloat(salario)

    return numberConvert.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })
}
