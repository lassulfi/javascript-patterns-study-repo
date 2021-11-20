const myRevealingModule = (function() {
    let privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount() {
        return privateCounter;
    }

    // Expondo ponteiros publicos para
    // variáveis e métodos privados
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };
})();

myRevealingModule.start();
console.log(myRevealingModule.count());
myRevealingModule.increment();
console.log(myRevealingModule.count());
