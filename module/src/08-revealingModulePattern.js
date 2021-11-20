const myRevealingModule = (function() {
    let privateVariable = 'Ben Cherry', publicVariable = 'Hey there!';

    function privateFunction() {
        console.log('Name: ' + privateVariable);
    }

    function publicSetName(name) {
        privateVariable = name;
    }

    function publicGetName() {
        privateFunction();
    }

    // Expondo ponteiros publicos para
    // variáveis e métodos privados

    return {
        setName: publicSetName,
        greeting: publicVariable,
        getName: publicGetName
    };
})();

console.log(myRevealingModule.greeting);

myRevealingModule.setName('Paul Kinlan');

myRevealingModule.getName();