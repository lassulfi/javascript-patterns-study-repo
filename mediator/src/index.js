const Participant = require('./01-participant');
const Chatroom = require('./01-chatroom');

const command = process.argv[2] || null;

if (command) {
    const example = Number(command);
    switch (example) {
        case 1:
            console.log('Running example 1')
            runExample1();
            break;
    }
}

function runExample1() {
    const jotaro = new Participant('Jotaro');
    const joseph = new Participant('Joseph');
    const dio = new Participant('DIO');

    const chatroom = new Chatroom();
    chatroom.register(jotaro);
    chatroom.register(joseph);
    chatroom.register(dio);

    joseph.send('OH MY GOD!');
    dio.send('MUDA! MUDA! MUDA! MUDA! MUDA! MUDA! MUDA!', jotaro);
    jotaro.send('ORA! ORA! ORA! ORA! ORA! ORA! ORA!', dio);
}