interface AnimalInterface{
    name: string
    color: string

    correr()
    andar()
    comer()
}

class Animal implements AnimalInterface{

    constructor(public name:string, public color: string){
    }

    correr(){

    }
    andar(){

    }
    comer(){
        console.log('c0mendo como um animal')
    }
}

class Coelho extends Animal{
    tamanhoOrelha: number

    comer(){
        //super.comer()    comer do Animal
        console.log('comendo como um coelho')
    }
}

let myAnimal: Animal = new Animal('Macaco', 'Azul')
console.log(myAnimal.name)
console.log(myAnimal.color)

const coelho = new Coelho('Jota', "Azul")
console.log(coelho)
coelho.comer()