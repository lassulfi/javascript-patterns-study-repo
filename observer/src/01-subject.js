const ObserverList = require('./01-observerList');

function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}

Subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

Subject.prototype.notify = function(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
}

module.exports = Subject;