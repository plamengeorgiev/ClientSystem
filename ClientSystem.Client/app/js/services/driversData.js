'use strict';

app.factory('driversData', function($resource) {

    var resource = $resource('http://spa2014.bgcoder.com/api/Drivers/:id', { id: '@id' });

    return {
        getDriver: function(id) {
            return resource.get({id: id});
        },

        getAllDrivers: function() {
            return resource.query();
        }
    }
})