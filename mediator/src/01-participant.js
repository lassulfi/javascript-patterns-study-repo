function Participant(name) {
    this.name = name;
    this.chatroom = null;
}

Participant.prototype.send = function(message, to) {
    this.chatroom.send(message, this, to);
}

Participant.prototype.recieve = function(message, from) {
    console.log(from.name + ' to ' + this.name + ': ' + message);
}

module.exports = Participant;