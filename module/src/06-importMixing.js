// Variação no module pattern - import mixing

function HttpHandler() {
    function post(url, body, options) {}

    function get(url, body, options) {}
};
const httpHandler = new HttpHandler();

const logger = {
    log: function(message) {
        $call.tracer.trace(message);
    },
    debug: function(str, value) {
        $console.debug(str, value);
    }
}

// Variação no module pattern - import mixing
const userModule = (function(http, logger) {
    const constUserUrl = 'https://api.users.com/login';
    function loginUser(user) {
        const headers = {'Content-Type': 'application/json'};

        logger.log('Request to ' + constUserUrl);
        const response = http.post(constUserUrl, user, {headers: headers});
        logger.debug('user response', response);

        return response;
    };

    return {
        login: function(body) {
            const result = loginUser(body.user);
            if (result.status === 200) {
                return {
                    status: 200,
                    message: 'Login successful'
                }
            } else {
                return {
                    status: 400,
                    message: 'Error in user login'
                }
            }
        }
    }
})(httpHandler, logger);

const login = userModule.login({
    username: 'username',
    password: 'password'
})