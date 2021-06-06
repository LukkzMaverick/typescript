function funcao(array: Array<number>){

}

function funcao2<T>(param: T): T{
    return param
}

const vxz:number = funcao2<number>(2)
const vzxz = funcao2<string>("2")
const zz = funcao2({})

class Lista<T> {
    items: Array<T> = []
    add(item: T){

    }
    remove(item: T){

    }
}

let lista = new Lista<number>()

lista.add(23)