function BasicSingleton() {
    let _count = 0;

    function privateIncrement() {
        return _count + 1;
    }

    function privateDecrement() {
        return _count - 1;
    }

    function privateGetCount() {
        return _count;
    }

    return {
        increment: function() {
            return privateIncrement();
        },

        decrement: function() {
            return privateDecrement();
        },

        getCount: function() {
            return privateGetCount();
        }
    }
}

function FooSingleton() {}

FooSingleton.prototype = new BasicSingleton();

FooSingleton.prototype.increment = function() {
    const count = this.getCount();
    return count + 2;
}

FooSingleton.prototype.decrement = function() {
    const count = this.getCount();
    return count - 2;
}

const mySubclassingSingleton = (function() {
    this._instance;

    function isFoo() {
        return true;
    }

    return {
        getInstance: function() {
            if(!this._instance) {
                if(isFoo()) {
                    console.log('Creating an instance of the FooSingleton');
                    this._instance = new FooSingleton();
                } else {
                    console.log('Creating an instance of the BasicSingleton');
                    this._instance = new BasicSingleton();
                }
            }

            return this._instance;
        }
    }
})();

module.exports = mySubclassingSingleton;