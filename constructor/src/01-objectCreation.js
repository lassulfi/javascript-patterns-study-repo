// Criar um objeto vazio

const emptyObject1 = {};
console.log('emptyObject1', emptyObject1);

const emptyObject2 = Object.create(Object.prototype);
console.log('emptyObject2', emptyObject2);

const emptyObject3 = new Object();
console.log('emptyObject3', emptyObject3);