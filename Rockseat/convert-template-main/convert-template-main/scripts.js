const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")

// Manipulando o Input amount para receber apenas numeros
amount.addEventListener("input", () => {
    
    // Validando o input se tem apenas numeros
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(currency.value)

})




