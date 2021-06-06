var soma = function (x, y) { return x + y; };
var funcao = function (nome) {
    return "Luiz Carlos " + nome;
};
var funcao2 = function (nome) { return "Luiz Carlos " + nome; };
var funcao3 = function (nome) { return "Luiz Carlos " + nome; };
var funcaoDefaultParameters = function (fistName, lastName) {
    if (lastName === void 0) { lastName = 'Silva'; }
};
funcaoDefaultParameters('Lucas');
var functionOptionalParameters = function (firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
};
functionOptionalParameters('João');
console.log('??');
