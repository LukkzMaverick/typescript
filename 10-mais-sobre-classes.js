var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.correr = function () {
    };
    Animal.prototype.andar = function () {
    };
    Animal.prototype.comer = function () {
        console.log('c0mendo como um animal');
    };
    return Animal;
}());
var Coelho = /** @class */ (function (_super) {
    __extends(Coelho, _super);
    function Coelho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coelho.prototype.comer = function () {
        //super.comer()    comer do Animal
        console.log('comendo como um coelho');
    };
    return Coelho;
}(Animal));
var myAnimal = new Animal('Macaco', 'Azul');
console.log(myAnimal.name);
console.log(myAnimal.color);
var coelho = new Coelho('Jota', "Azul");
console.log(coelho);
coelho.comer();
