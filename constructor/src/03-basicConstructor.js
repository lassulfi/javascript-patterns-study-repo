function Car(model, year, kilometers) {
    this.model = model;
    this.year = year;
    this.kilometers = kilometers;

    this.toString = function() {
        return this.model + ' has done ' + this.kilometers + ' kilometers';
    }
}

const civic = new Car('Honda Civic', 2009, 50000);
const mondeo = new Car('Ford Mondeo', 2010, 10000);

console.log(civic.toString());
console.log(mondeo.toString());