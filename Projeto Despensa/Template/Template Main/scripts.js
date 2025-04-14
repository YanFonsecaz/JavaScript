// trazendo valores
"use strict"
amount = document.querySelector("#amount")
const form = document.querySelector("form")
const expense = document.querySelector("#expense")
const category = document.querySelector("#category")

const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span")
const expensesTotal = document.querySelector("aside header h2")

amount.addEventListener("input", () => {

   const regex = /\D/g;

   let value = amount.value.replace(regex, "")

   value = Number(value / 100);

   amount.value = formatCurrencyBRL(value)

})

function formatCurrencyBRL(value) {

   value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
   })

   return value
}

form.addEventListener("submit", (event) => {
   event.preventDefault()

   const newExpense = {
      id: new Date().getTime(),
      expense: expense.value,
      category_id: category.value,
      category_name: category.options[category.selectedIndex].text,
      amount: amount.value,
      created_at: new Date(),
   }
   expenseAdd(newExpense)
})

function expenseAdd(newExpense) {
   try {
      const expenseItem = document.createElement("li")
      expenseItem.classList.add("expense")

      const expenseIcon = document.createElement("img")
      expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
      expenseIcon.setAttribute("alt", newExpense.category_name)

      const expenseInfo = document.createElement("div")
      expenseInfo.classList.add("expense-info")

      const expenseName = document.createElement("strong")
      expenseName.textContent = newExpense.expense

      const expenseCategory = document.createElement("span")
      expenseCategory.textContent = newExpense.category_name

      const expenseAmount = document.createElement("span")
      expenseAmount.classList.add("expense-amount")
      expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount.toUpperCase().replace("R$", "")}`

      const removeIcon = document.createElement("img")
      removeIcon.classList.add("remove-icon")
      removeIcon.setAttribute("src", "img/remove.svg")
      removeIcon.setAttribute("alt", "remover")

      expenseInfo.append(expenseName, expenseCategory)

      expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)
      expenseList.append(expenseItem)

      formClear()

      updateTotals()

   } catch (error) {
      console.log(error)
      alert("Nao foi possivel atualizar a lista de despensa")
   }
}

function updateTotals() {
   try {
      const items = expenseList.children

      expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "Despensas" : "Despensa"}`

      let total = 0

      for (let item = 0; item < items.length; item++) {
         const itemAmount = items[item].querySelector(".expense-amout")

         let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

         value = parseFloat(value)

         if (isNaN(value)) {
            return alert("Não foi possivel calcular o total. o valor nao parece ser um numero")
         }

         total += Number(value)

         const symbolBRL = document.createElement("small")
         symbolBRL.textContent = "R$"

         total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")

         expensesTotal.innerHTML = ""

         expensesTotal.append(symbolBRL, total)

      }
   } catch (error) {
      console.log(error)
      alert("Update do falhou")
   }
}

expenseList.addEventListener("click", (event) => {
   if (event.target.classList.contains("remove-icon")) {

      const item = event.target.closest(".expense")

      item.remove()

      updateTotals()
   }
})

function formClear() {
   expense.value = ""
   category.value = ""
   amount.value = ""

}