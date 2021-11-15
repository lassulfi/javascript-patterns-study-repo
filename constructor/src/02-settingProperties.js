// Definindo propriedades

let newObject = new Object();

// 1. Dot syntax

// Set
newObject.someKey = 'Hello, ZA WARUDO';

// Get
const someKeyValue = newObject.someKey

console.log('dot syntax', newObject, someKeyValue);

// 2. Square bracket syntax

// Set
newObject['bracket'] = 'Square bracket syntax';

// Get
const squareBracketValue = newObject['bracket'];

console.log('square bracket syntax', newObject, squareBracketValue);

// 3. Object.defineProperty

Object.defineProperty(newObject, 'definePropertyKey', {
    value: 'maior controle sobre o comportamento da propriedade',
    writable: true,
    enumerable: true,
    configurable: true
});

// Short-hand

const defineProperty = function(obj, key, value) {
    const config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    }
    Object.defineProperty(obj, key, config);
};

let person = Object.create(Object.prototype);

defineProperty(person, 'car', 'Delorean');
defineProperty(person, 'dateOfBirth', '1981');
defineProperty(person, 'hasBeard', false);

console.log('Define Property', person);

// 4. Object.defineProperties
Object.defineProperties(newObject, {
    'definedProperty1': {
        value: 'Defined Property 1',
        writable: true
    },
    'definedProperty2': {
        value: 'Defined Property 2',
        writable: true
    }
});

console.log('Object.defineProperties', newObject);

// Exemplo de uso - herança
let driver = Object.create(person);
defineProperty(driver, 'topSpeed', '100 km/h');

console.log(driver.dateOfBirth);
console.log(driver.topSpeed);