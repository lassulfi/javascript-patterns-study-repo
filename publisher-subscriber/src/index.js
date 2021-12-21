const PubSub = require('./01-publishSubscriber');

const command = process.argv[2] || null;

if (command) {
    const example = Number(command);
    switch (example) {
        case 1:
            console.log('Running example 1');
            runExample1();
            break;
        case 2:
            console.log('Running example 2');
            runExample2();
            break;
    }
} else {
    console.log('invalid command');
}

function runExample1() {
    const pubsub = new PubSub();
    pubsub.subscribe('/addFavorite', function(topic, args) {
        console.log('test', topic, args);
    });
    pubsub.publish('/addFavorite', ['test']);
}

function runExample2() {
    const pubsub = new PubSub();

    const messageLogger = function(topics, data) {
        console.log(`Logging: ${topics}: ${data}`);
    }

    const subscription = pubsub.subscribe('inbox/Message', messageLogger);
    
    pubsub.publish('inbox/Message', 'Hello, ZA WARUDO!');

    pubsub.publish('inbox/Message', ['test', 'a', 'b', 'c']);

    pubsub.publish('inbox/Message', {
        sender: 'jotaro@speedwagonfoundation.com',
        body: 'ORA'
    });

    pubsub.unsubscribe(subscription);

    pubsub.publish('inbox/Message', 'Hello! Are you still there?');
}