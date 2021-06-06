//booleano
var success = true; //implicita
var kk = false; //explicita
//numeros
var n1 = 10;
var n2 = 10.50;
var n3 = 0xFA;
//string
var nome = "Só um teste";
var nome2 = "Lukkz Maverick";
//array
var arrayStrings = ["2", "3"];
var arrayStrings2 = ["2", "3"];
var array = [2, 3];
var estadoCivil;
(function (estadoCivil) {
    estadoCivil[estadoCivil["Solteiro"] = 0] = "Solteiro";
    estadoCivil[estadoCivil["Casado"] = 1] = "Casado";
    estadoCivil[estadoCivil["Divorciado"] = 2] = "Divorciado";
})(estadoCivil || (estadoCivil = {}));
var estadoCivilJoao = estadoCivil.Casado;
if (estadoCivilJoao === estadoCivil.Casado) {
    console.log('João é Casado');
}
