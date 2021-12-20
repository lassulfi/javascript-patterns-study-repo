const {shoppingCart, shippingPrice} = require('./01-observerPattern');

const command = process.argv[2] || null;

if (command) {
    const example = Number(command);
    switch (example) {
        case 1:
            console.log('Running example 1');
            runExample1();
            break;
    }
} else {
    console.log('invalid command');
}

function runExample1() {
    console.log('Adding item to shopping cart...');
    shoppingCart.addItem({
        name: 'Notebook',
        description: 'Dell notebook',
        price: 2500,
        weight: 1000
    });
    console.log('Total price', shoppingCart.getTotalPrice());
    console.log('Shipping price', shippingPrice.getShippingPrice());
}