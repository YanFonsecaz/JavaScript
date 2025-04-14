const adress1 = {
    street: "avenida brasil",
    number: 20
}
// Imuntabilidade pode ser alterado o valor assim
const adress2 = {...adress1}
adress2.number = 30

console.log(adress1, adress2)

// Ou assim
const adress3 = {...adress1, number:40}

console.log(adress3)

// Com array

const list1 = ["apple","banana","melon"]

const list2 = [...list1]
list2.push("Maça")

const list3 = [...list2, "mamao"]

console.log(list2,list3)