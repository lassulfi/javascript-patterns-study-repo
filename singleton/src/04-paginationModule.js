const paginationModule = (function() {
    function PaginationSingleton(options) {
        const _data = options.data;
        const _apiUrl = options.url;
        const _pageSize = options.pageSize || 10;
        let _currentPage = options.currentPage || 1;
        
        const _numberOfElements = _data.length;
        const _numberOfPages = Math.ceil(_numberOfElements / _pageSize);

        function setCurrentPage(page) {
            _currentPage = page;
        }
        
        function getEmbeddedResult() {
            console.log('page size', _pageSize);
            console.log('current page', _currentPage);

            const startIndex = (_currentPage - 1) * _pageSize;
            console.log('start index', startIndex);
            const endIndex = startIndex + (_pageSize - 1);
            console.log('end index', endIndex);

            // TODO: uncomment the following line for API Manager Implementation
            // return Arrays.copyOfRange(data, startIndex, endIndex);
            return _data.slice(startIndex, endIndex);
        }

        function getLinkRefObject() {
            const limit = calculateLimit(_numberOfElements, _pageSize);
            const previousPage = calculatePreviousPage(_currentPage);
            const nextPage = calculateNextPage(_currentPage, _numberOfPages);
            const previousPageSize = calculatePreviousPageSize(previousPage, _pageSize, _numberOfElements);
            const nextPageSize = calculateNextPageSize(nextPage, _pageSize, _numberOfElements);
            const lastPageSize = calculateLastPageSize(_numberOfElements, _numberOfPages, _pageSize);

            return [
                {
                    page: 'first',
                    href: _apiUrl + '?_offset=1&_limit=' + limit
                },
                {
                    page: 'prev',
                    href: previousPage !== null ? _apiUrl + '?_offset=' + previousPage + '&_limit=' + previousPageSize : null
                }, 
                {
                    page: 'next',
                    href: nextPage !== null ? _apiUrl + '?_offset=' + nextPage + '&_limit=' + nextPageSize : null
                },
                {
                    page: 'last',
                    href: _apiUrl + '?_offset=' + _numberOfPages + '_limit=' + lastPageSize
                }
            ]
        }

        function calculateLimit(numberOfElements, pageSize) {
            return numberOfElements > pageSize 
            ? pageSize 
            : numberOfElements;
        }

        function calculatePreviousPage(currentPage) {
            return currentPage > 1 
            ? currentPage - 1 
            : null;
        }

        function calculateNextPage(currentPage, numberOfPages) {
            return currentPage < numberOfPages 
            ? currentPage + 1 
            : null;
        }

        function calculatePreviousPageSize(previousPage, pageSize, numberOfElements) {
            return previousPage !== null && previousPage * pageSize > numberOfElements 
            ? pageSize 
            : numberOfElements - pageSize;
        }

        function calculateNextPageSize(nextPage, pageSize, numberOfElements) {
            return nextPage !== null && nextPage * pageSize > numberOfElements 
            ? pageSize 
            : numberOfElements - pageSize;
        }

        function calculateLastPageSize(numberOfElements, numberOfPages, pageSize) {
            return numberOfElements - (numberOfPages - 1) * pageSize;

        }

        function responsePaginated() {
            const result = getEmbeddedResult();
            console.log('paginated data', result);

            const links = getLinkRefObject();
            console.log('link object', links);

            return {
                body: {
                    _embedded: {
                        _result: result
                    },
                    _links_ref: links
                },
                headers: {
                    'Content-Range': _currentPage + ' - ' + _numberOfPages + '/' + _numberOfElements
                }
            }
        };

        return {
            getResponsePaginated: function() {
                return responsePaginated();
            },
            setPage: function(page) {
                setCurrentPage(page);
            }
        }
    }

    let instance;

    let _static = {
        name: 'Pagination module',
        getInstance: function(options) {
            if (instance === undefined) {
                instance = new PaginationSingleton(options);
            }

            return instance;
        }
    }

    return _static;
})();

module.exports = paginationModule;