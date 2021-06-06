//booleano
let success = true //implicita
let kk: boolean = false //explicita

//numeros
let n1 = 10
let n2:number = 10.50
let n3:number = 0xFA

//string
let nome = "Só um teste"
let nome2: string = "Lukkz Maverick"

//array
let arrayStrings: Array<String> = ["2","3"]
let arrayStrings2: string[] = ["2","3"]
let array: Array<any> = [2,3]

//enum
enum estadoCivil {
    Solteiro, 
    Casado,
    Divorciado
}

let estadoCivilJoao: estadoCivil = estadoCivil.Casado

if(estadoCivilJoao === estadoCivil.Casado){
    console.log('João é Casado')
}