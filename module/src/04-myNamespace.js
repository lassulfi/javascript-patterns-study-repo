/**
 * template para desenvolvimento de um módulo
 */
const myNamespace = (function() {
    // declaração das variáveis e métodos
    let myPrivateVariable;
    const myPrivateMethod;

    // Iniciando a variável - contador
    myPrivateVariable = 0;

    //  declaração do método privado - log com argumentos
    myPrivateMethod = function(args) {
        console.log(args);
    };

    return {
        // variável publica
        myPublicVariable: 'public value',
        
        // função publica
        myPublicFunction: function (value) {
            myPrivateVariable++;
            myPrivateMethod(value);
        }
    }
})();