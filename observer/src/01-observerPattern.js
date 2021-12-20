const Observer = require("./01-observer");
const Subject = require("./01-subject");

// Extend an object with an extension
function extend (obj, extension) {
    for (let key in extension) {
        obj[key] = extension[key];
    }
}

function ShoppingCart() {
    this.items = [];

    this.status = {
        added: 'ADDED',
        removed: 'REMOVED'
    };

    this.getTotalPrice = function() {
        return this.items.reduce(function(previousValue, currentValue) {
            return previousValue.price + currentValue.price;
        }, 0);
    }
}

let shoppingCart = new ShoppingCart();
extend(shoppingCart, new Subject());
shoppingCart.addItem = function(item) {
    this.items.push(item);
    shoppingCart.notify({
        status: this.status.added,
        item: {
            name: item.name,
            price: item.price,
            weight: item.weight,
        },
    });
}

function ShippingPrice() {
    this.shippingList = [];

    this.addToList = function(item) {
        this.shippingList.push(item);
    }

    this.getShippingPrice = function() {
        return this.shippingList.reduce(function(previousValue, currentValue) {
            return previousValue.price + (currentValue.price * 0.10);
        }, {price: 0});
    }
}

let shippingPrice = new ShippingPrice();
extend(shippingPrice, new Observer());
shippingPrice.update = function(context) {
    switch (context.status) {
        case 'ADDED':
            console.log('Added item to shipping price');
            this.addToList(context.item);
            break;
    }
}

shoppingCart.addObserver(shippingPrice);

module.exports = {
    shoppingCart,
    shippingPrice
}
