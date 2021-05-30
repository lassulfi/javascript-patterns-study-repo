const factory = require('./src/AuthorizationFactory');

let generalAuthrorizer = factory.createAuthorizer();
generalAuthrorizer.setUrl("https://myapi.com.br").setHeaders({
    'authorization': 'Basic MmYyYTliM2EtNzVkMC00NzRlLWFhYTQtZjZlOGYwMzdmZTI3OmQ1ZmZiM2ViLTA4ODMtNGVkOS05Mzc1LWRmYmU0YzM3MjU5MQ=='
}).setBody({
    'grant_type': 'client_credentials'
});

console.log(generalAuthrorizer.authorize());

let adminAuthorizer = factory.createAuthorizer('admin');
adminAuthorizer.setUrl("https://myapi.com.br").setHeaders({
    'authorization': 'Basic MmYyYTliM2EtNzVkMC00NzRlLWFhYTQtZjZlOGYwMzdmZTI3OmQ1ZmZiM2ViLTA4ODMtNGVkOS05Mzc1LWRmYmU0YzM3MjU5MQ=='
}).setBody({
    'grant_type': 'paswword',
    'username': 'admin',
    'password': 'admin'
});
console.log(adminAuthorizer.authorize());

let salesAuthorizer = factory.createAuthorizer('sales');
salesAuthorizer.setUrl("https://myapi.com.br").setHeaders({
    'authorization': 'Basic MmYyYTliM2EtNzVkMC00NzRlLWFhYTQtZjZlOGYwMzdmZTI3OmQ1ZmZiM2ViLTA4ODMtNGVkOS05Mzc1LWRmYmU0YzM3MjU5MQ=='
}).setBody({
    'grant_type': 'paswword',
    'username': 'admin',
    'password': 'admin'
});
console.log(salesAuthorizer.authorize());