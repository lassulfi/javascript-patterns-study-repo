function PubSub() {
    // Storage for topics that can be broadcast
    // or listened to
    this.topics = {};

    // Topic identifier
    this.subUid = -1;

    this.publish = function(topic, args) {
        if(!this.topics[topic]) {
            return false;
        }

        const subscribers = this.topics[topic];
        let len = subscribers ? subscribers.length : 0;

        while(len--) {
            subscribers[len].func(topic, args);
        }

        return this;
    }

    this.subscribe = function(topic, func) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }

        const token = (++this.subUid).toString();
        this.topics[topic].push({
            token,
            func
        });

        return token;
    }

    this.unsubscribe = function(token) {
        for (const m in this.topics) {
            if(this.topics[m]) {
                for(let i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i]) {
                        this.topics[m].splice(i, 1);

                        return token;
                    }
                }
            }
        }

        return this;
    }
}

module.exports = PubSub;