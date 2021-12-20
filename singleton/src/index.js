const {mySingleton, myBadSingleton} = require('./01-singletonPattern');
const mySubclassingSingleton = require('./02-subclassingSingleton');
const singletonTester = require('./03-staticModule');
const paginationModule = require('./04-paginationModule');

const command = process.argv[2] || null;

if (command) {
    const example = Number(command);
    switch (example) {
        case 1:
            console.log('Running example 1');
            runExample1();
            break;
        case 2:
            console.log('Running example 2');
            runExample2();
            break;
        case 3:
            console.log('Running example 3');
            runExample3();
            break;
        case 4:
            console.log('Running example 4');
            runExample4();
            break;
    }
} else {
    console.log('invalid command');
}

// Exemplo 1
function runExample1() {
    const singletonA = mySingleton.getInstance();
    const singletonB = mySingleton.getInstance();
    console.log('singletons', singletonA.getRandomNumber() === singletonB.getRandomNumber());
    
    const badSingletonA = myBadSingleton.getInstance();
    const badSingletonB = myBadSingleton.getInstance();
    console.log('bad singletons', badSingletonA.getRandomNumber() !== badSingletonB.getRandomNumber());
}

// Exemplo 2
function runExample2() {
    const subclassingSingleton = mySubclassingSingleton.getInstance();
    console.log('subclassing increment', subclassingSingleton.increment());
    console.log('subclassing decrement', subclassingSingleton.decrement());
}


// Exemplo 3
function runExample3() {
    const singletonTest = singletonTester.getInstance({
        pointX: 5
    });
    console.log('singletonTest name', singletonTest.name);
    console.log('singletonTest pointX', singletonTest.pointX);
    console.log('singletonTest pointY', singletonTest.pointY);
}

// Exemplo 4
function runExample4() {
    const data = [
        {name: 'name 1', age: 1},
        {name: 'name 2', age: 2},
        {name: 'name 3', age: 3},
        {name: 'name 4', age: 4},
        {name: 'name 5', age: 5},
        {name: 'name 6', age: 6},
        {name: 'name 7', age: 7},
        {name: 'name 8', age: 8},
        {name: 'name 9', age: 9},
        {name: 'name 10', age: 10},
        {name: 'name 11', age: 11},
        {name: 'name 12', age: 12},
        {name: 'name 13', age: 13},
        {name: 'name 14', age: 14},
        {name: 'name 16', age: 16},
        {name: 'name 17', age: 17},
        {name: 'name 18', age: 18},
        {name: 'name 19', age: 19},
        {name: 'name 20', age: 20},
        {name: 'name 21', age: 21},
        {name: 'name 22', age: 22},
        {name: 'name 23', age: 23},
        {name: 'name 24', age: 24},
        {name: 'name 24', age: 24},
        {name: 'name 25', age: 25},
        {name: 'name 26', age: 26},
    ]
    const options = {
        data,
        url: 'https://api.sensedia.com/my-awesome-api/v1/awesomeness'
    }
    const paginationInstance = paginationModule.getInstance(options);
    let responsePaginated = paginationInstance.getResponsePaginated();
    console.log('Paginated Response #1', JSON.stringify(responsePaginated));
    paginationInstance.setPage(2);
    responsePaginated = paginationInstance.getResponsePaginated();
    console.log('Paginated Response #2', JSON.stringify(responsePaginated));
    paginationInstance.setPage(3);
    responsePaginated = paginationInstance.getResponsePaginated();
    console.log('Paginated Response #3', JSON.stringify(responsePaginated));
}
