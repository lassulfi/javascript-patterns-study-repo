const singletonTester = (function() {
    // options - objeto que contém as opções de configuração do singleton
    function Singleton(options) {
        // Define as opções se existir ou cria um objeto vazio caso contrário
        options = options || {};

        // Definição das propriedades do singleton
        this.name = "SingletonTester";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }

    // variável que irá armazenar a instancia do singleton
    let instance;

    // emulando uma classe estática
    let _static = {
        name: "Static SingletonTester",

        // Método para retornar uma instancia. Retorna a instancia
        // singleton de um objeto singleton
        getInstance: function(options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }

            return instance;
        }
    };

    return _static;
})();

module.exports = singletonTester;