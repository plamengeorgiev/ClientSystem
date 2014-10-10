'use strict';

app.factory('tripsData', function($resource) {

    var resource = $resource('http://spa2014.bgcoder.com/api/Trips/:id', { id: '@id' });

    return {
        getTrip: function(id) {
            return resource.get({id: id});
        },
        saveTrip: function(trip) {
            //TODO send token for authorization
             if (!trip.id) {
                 resource.query().$promise.then(function(data) {
                     trip.id = data.length + 1;
                     resource.save(trip);
                 });
             }
             else {
                 resource.save(trip);
             }
        },
        getAllTrips: function() {
            return resource.query();
        },

        getAllCities: function() {
            return $resource('http://spa2014.bgcoder.com/api/Cities').query();
        }
    }
})