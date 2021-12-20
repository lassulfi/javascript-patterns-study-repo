const CHARSET = 'UTF-8';

const ApiResponse = com.sensedia.interceptor.externaljar.dto.ApiResponse;

try {
    const requestBody = $request.getBody().getString(CHARSET);
    const requestBodyJson = JSON.parse(requestBody);
    const urls = requestBodyJson.urls;

    const processUrls = new ProcessUrls({
        urls: urls,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    extend(processUrls, new Subject());
    processUrls.proccess = function() {
        if (this.urls.length) {
            this.urls.forEach(function(url) {
                const response = $http.get(this.headers, url);
                processUrls.notify(response);
            })
        }
    };

    const processedList = new ProcessedList();
    extend(processedList, new Observer());
    processedList.update = function(response) {
        if(+response.getStatus() === 200) {
            const responseJson = JSON.parse(response.responseText);
            this.processedList.push(responseJson);
        }
    };
    
    const responseBody = processedList.getList();
    const response = new Response(responseBody, 200);
    response.prepareResponse();

} catch (ex) {
    $call.tracer.trace('Unexpected exception in line ' + ex.lineNumber + ' with message ' + ex.message);
}

function ProcessUrls(processUrlsOptions) {
    this.urls = processUrlsOptions.urls || [];
    this.headers = processUrlsOptions.headers;
}

// Extend an object with an extension
function extend(obj, extension) {
    for (let key in extension) {
        obj[key] = extension[key];
    }
}

// Subject implementation
function Subject() {
    this.observerList = new ObserverList();
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

function ProcessedList(list) {
    this.list = list || {};
}

ProcessedList.prototype.getList = function() {
    return this.list();
}

// Observer List Implementation
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.count = function() {
    return this.observerList.length;
}

ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
    let i = startIndex;
    while(i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
}

ObserverList.prototype.removeAt = function(index) {
    return this.observerList.splice(index, 1);
}

// Observer interface
function Observer() {
    this.update = function(context) {}
}

function Response(processedList, status) {
    this.processedList = processedList;
    this.status = status;

    this.prepareResponse = function() {
        $call.response = new ApiResponse();
        $call.response.setStatus(this.status);
        $call.response.getBody().setString(this.processedList, CHARSET);
        $call.response.setHeader('Content-Type', 'application/json');
        $call.stopFlow = true;
        $call.decision.setAccept(false);
    }
}