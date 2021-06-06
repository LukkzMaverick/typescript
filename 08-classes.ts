class Animal{

    constructor(public name:string, public color: string){
    }
}

let myAnimal: Animal = new Animal('Macaco', 'Azul')
console.log(myAnimal.name)
console.log(myAnimal.color)