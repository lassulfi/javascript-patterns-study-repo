function Chatroom() {
    let participants = {};

    function registerParticipant(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
    }

    function sendMessage(message, from, to) {
        if (to) {
            to.recieve(message, from);
        } else {
            for (let key in participants) {
                if (participants[key] !== from) {
                    participants[key].recieve(message, from);
                }
            }
        }
    }

    return {
        register: registerParticipant,
        send:sendMessage
    }
}

module.exports = Chatroom;