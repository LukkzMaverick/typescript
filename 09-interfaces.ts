interface ObjectValue {
    category: string
    product: string
}

function show({category, product}: ObjectValue){
    console.log(category)
    console.log(product)
}
show({category: 'vegetariana',product: 'pizza'})

let obj: ObjectValue = {category: 'kk', product: 'teste'}

class Product implements ObjectValue {
    constructor(public category: string, public product:string){

    }
}
let product = new Product('kk', 'ue')
console.log(product)