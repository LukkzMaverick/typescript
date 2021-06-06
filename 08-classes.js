var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    return Animal;
}());
var myAnimal = new Animal('Macaco', 'Azul');
console.log(myAnimal.name);
console.log(myAnimal.color);
