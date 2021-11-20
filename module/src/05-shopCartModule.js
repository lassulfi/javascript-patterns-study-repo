const shopCartModule = (function() {
    // private variables and functions
    let shopCart = [];

    function listItems() {
        return shopCart;
    };

    // Return an object exposed to the public
    return {
        addItem: function(item) {
            shopCart.push(item);
        },
        getItemCount: function() {
            return shopCart.length;
        },
        getItemList: listItems,
        getTotal: function () {
            // Nota: não foi utilizada a função reduce pois o manager não implementa
            let total = 0;
            shopCart.forEach(function(item) {
                total += item.price
            });
            return total;
        }
    }
})();

module.exports = {shopCartModule};

// Exportando no API Manager para ser utilizando no contexto de uma requisição
// try {
//     $call.contextVariables.put('shopCartModule', shopCartModule);
// } catch (exception) {
//     $call.tracer.trace('Exception in line ' + exception.lineNumber + ' with the following message: ' + exception.message);
// }