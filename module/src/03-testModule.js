/**
 * Encapsulamento e exposição de objeto para ser consumido
 */
const testModule = (function() {
    let counter = 0;

    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log('counter value prior to reset: ' + counter);
            counter = 0;
            console.log('reset counter: ' + counter);
        }
    }
})();

testModule.incrementCounter();

testModule.resetCounter();

console.log(testModule.counter);

testModule.incrementCounter();
testModule.incrementCounter();

testModule.resetCounter();