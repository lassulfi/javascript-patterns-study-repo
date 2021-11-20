// Export module variation
const myModule = (function() {
    let module = {};
    const privateVariable = 'Hello, ZA WARUDO';

    function privateMethod() {
        // code here...
    };

    module.publicProperty = 'Foobar';
    module.publicMethod = function () {
        console.log(privateVariable);
    };

    return module;
})();