let nome: any = 'Lukkz Maverick'
console.log((nome as string).length)

let obj = {
    name: "Lukkz"
};

(obj as any).tio = 'Tonho'
console.log(obj)

//converter número para string
let num = 2
let stringNum = `${num}`
let numToString = num.toString()

//converter string para numero
let numString = "234"
let num2 = +numString

console.log(typeof num2)
console.log(typeof stringNum)
console.log(typeof numToString)