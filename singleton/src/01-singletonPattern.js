const mySingleton = (function() {
    // Instancia que armazena a referencia do Singleton 
    let instance;

    function init() {
        // Singleton

        // Variáveis e métodos privados
        let privateVariable = 'private variable';

        const privateRandomNumber = Math.random();

        function privateMethod() {
            console.log('Private method called');
        }

        return {
            publicMethod: function() {
                // Variáveis e métodos públicos
                console.log('Public method called');
            },
            publicProperty: 'Public property',
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    }

    return {
        // Retorna a instancia do Singleton se existir ou cria uma nova
        getInstance: function() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

const myBadSingleton = (function() {
    let instance;

    function init() {
        // Singleton
        const privateRandomNumber = Math.random();

        return {
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    };

    return {
        // Sempre cria uma nova instancia do Singleton
        getInstance: function() {
            instance = init();

            return instance;
        }
    }
})();

module.exports = {mySingleton, myBadSingleton}