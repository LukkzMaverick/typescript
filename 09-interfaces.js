function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
show({ category: 'vegetariana', product: 'pizza' });
var obj = { category: 'kk', product: 'teste' };
var Product = /** @class */ (function () {
    function Product(category, product) {
        this.category = category;
        this.product = product;
    }
    return Product;
}());
var product = new Product('kk', 'ue');
console.log(product);
