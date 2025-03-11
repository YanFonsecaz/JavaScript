class Animal {
    constructor(name) {
        this.name = name
    }
    static makeNoise() {
        console.log("Rouv Rouv")
    }
}

Animal.makeNoise()

//////////////////////////////

class Animals {
    constructor(name) {
        this.name = name
    }
    makeNoises() {
        console.log("Som generico")
    }
}

///////////////////////////////////////////
class Dog extends Animals {
    makeNoises(){
        console.log("rau rau")
    }
}
const myDog = new Dog("Calvos")
console.log(myDog.name)
myDog.makeNoises()

//////////////////////////////////////////////////////////////////////
class Cat extends Animals {
    makeNoises(){
        console.log("maiu miua")
    }
}
const myCat = new Cat("Mel")
console.log(myCat.name)
myCat.makeNoises()
