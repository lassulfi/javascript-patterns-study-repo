function Car(model, year, kilometers) {
    this.model = model;
    this.year = year;
    this.kilometers = kilometers;
}

Car.prototype.toString = function() {
    return this.model + ' has done ' + this.kilometers + ' kilometers';
}

Car.prototype.move = function() {
    return this.model + ' is moving';
}

const civic = new Car('Honda Civic', 2009, 50000);
const mondeo = new Car('Ford Mondeo', 2010, 10000);

console.log(civic.toString());
console.log(civic.move());

console.log(mondeo.toString());
console.log(mondeo.move());