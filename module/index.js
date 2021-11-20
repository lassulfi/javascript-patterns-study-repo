console.log('Hello, ZA WARUDO!');

const {shopCartModule} = require('./src/05-shopCartModule');

// exemplo de implementação do shopCartModule
// shopCartModule retorna um objeto com uma API Publica

shopCartModule.addItem({
    name: 'Celular',
    price: 2000
});
shopCartModule.addItem({
    name: 'Notebook',
    price: 3000
});

console.log('Quantidade de itens no carrinho: ' + shopCartModule.getItemCount());

console.log('Valor total do carrinho: ' + shopCartModule.getTotal());

console.log('Itens do carrinho:\n' + JSON.stringify(shopCartModule.getItemList()));

console.log(shopCartModule.shopCart);

console.log(shopCart);