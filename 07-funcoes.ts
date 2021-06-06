const soma = (x: number, y: number): number => x + y

const funcao = (nome: string) => {
    return `Luiz Carlos ${nome}`
}

const funcao2 = (nome: string) => `Luiz Carlos ${nome}`

const funcao3 = nome => `Luiz Carlos ${nome}`

let funcaoDefaultParameters = (fistName, lastName:string='Silva') => {

}

funcaoDefaultParameters('Lucas')

const functionOptionalParameters = (firstName:string, lastName?:string) => {
    console.log(lastName)
}

functionOptionalParameters('João')
