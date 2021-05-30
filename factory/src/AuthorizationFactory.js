function BaseAuthorizerBuilder () {}
BaseAuthorizerBuilder.prototype.setConsole = function (console) {
    this.console = console;
    return this;
}
BaseAuthorizerBuilder.prototype.getConsole = function () {
    return this.console;
}
BaseAuthorizerBuilder.prototype.setUrl = function (url) {
    this.url = url;
    return this;
}
BaseAuthorizerBuilder.prototype.setHeaders = function (headers) {
    this.headers = headers;
    return this;
}
BaseAuthorizerBuilder.prototype.setBody = function (body) {
    this.body = body;
    return this;
}
BaseAuthorizerBuilder.prototype.authorize = function () {
    return 'Authorization request for ' + this.url 
            + ' with headers ' + JSON.stringify(this.headers) 
            + ' with body ' + JSON.stringify(this.body);
}

function AdminAuthorizer () {}
AdminAuthorizer.prototype = new BaseAuthorizerBuilder();
AdminAuthorizer.prototype.authorize = function () {
    return BaseAuthorizerBuilder.prototype.authorize.call(this) + ' for admin';
}

function GeneralUserAuthorizer () {}
GeneralUserAuthorizer.prototype = Object.create(BaseAuthorizerBuilder.prototype);
GeneralUserAuthorizer.prototype.authorize = function () {
    return BaseAuthorizerBuilder.prototype.authorize.call(this) + ' for general user';
}

function SalesUserAuthorizer () {}
SalesUserAuthorizer.prototype = new BaseAuthorizerBuilder();
SalesUserAuthorizer.prototype.authorize = function () {
    return BaseAuthorizerBuilder.prototype.authorize.call(this) + ' for sales user';
}

function AuthorizerFactory () {
    this.createAuthorizer = function (userType = 'general') {
        switch (userType) {
            case 'admin':
                return new AdminAuthorizer();
            case 'sales':
                return new SalesUserAuthorizer();
            default:
                return new GeneralUserAuthorizer();
        }
    }
}

var factory = new AuthorizerFactory();

module.exports = factory;