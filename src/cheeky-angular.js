(function(window, angular, undefined){
    
'use strict'

/**
 * @ngdoc overview
 * @name cheeky
 * @description Angular Services for Cheeky CMS
 */
angular.module('cheeky', ['angular-cache']);

/**
 * @ngdoc directive
 * @name cheekyContent
 */
angular.module('cheeky').directive('cheekyContent', function (cheekyContentService) {
    return {
        restrict: 'EA',
        scope: {
            path: '@'
        },
        link: function (scope, element, attrs) {
            var path = scope.path || attrs.cheekyContent;
            cheekyContentService.fetch(path).then(function (data) {
                element.html(data);
            });
        }
    };
});

/**
 * @ngdoc service
 * @name cheekyContentService
 */
angular.module('cheeky').factory('cheekyContentService', function ($q, $http, CacheFactory) {

    // configurations
    // TODO: configure this in run/config
    var CACHE_KEY = 'cheeky';
    var CACHE_LIFETIME = 15 * 60 * 1000;
    var STORAGE_MODE = 'localStorage';
    var map = {
        "content": "content.json",
        "crumpet": "crumpet.json"
    };
    
    // configure the cache factory    
    CacheFactory(CACHE_KEY, {
        maxAge: CACHE_LIFETIME,
        storageMode: STORAGE_MODE
    });

    // fetches content for a given path
    // path follows the format {namespace}.{name}.{name}
    // the namespace corresponds to an endpoint
    function fetch(path) {

        var deferred = $q.defer(),
            parts = path.split('.'),
            ns = parts[0],
            cp = parts.slice(1).join('.');

        _fetch(ns).then(function (cache) {
            // reject if empty, allow for silent fail
            deferred.resolve(_.get(cache, cp));
        });
        return deferred.promise;
    }

    /**
     * Warmup the cache
     */
    function warmup(ns) {
        _fetch(ns);
    }

    /**
     * Internal fetch of cms content
     * @private
     */
    function _fetch(ns) {
        var deferred = $q.defer();
        $http.get(map[ns], {
            cache: CacheFactory.get(CACHE_KEY)
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
    
    return {
        fetch: fetch,
        warmup: warmup
    };
    
});

})(window, angular);