'use strict';

app.controller('TripsController', ['$scope', 'notifier', 'tripsData', 'identity', function($scope, notifier, tripsData, identity) {
    $scope.identity = identity;
        tripsData
        .getAllTrips()
        .$promise
        .then(function (trips) {
            var latestTrips = [];
            var fromTowns = [];
            var toTowns = [];
            for (var i = trips.length - 1; i >= 0; i--) {
                if (fromTowns.indexOf(trips[i].from)<0){
                    fromTowns.push(trips[i].from)
                }
                if (toTowns.indexOf(trips[i].to)<0){
                    toTowns.push(trips[i].to)
                }
                if (latestTrips == 10) {
                    break;
                }

                if (latestTrips.length < 10 && trips[i]) {
                    latestTrips.push(trips[i]);
                }
            }
            $scope.fromTowns = fromTowns;
            $scope.toTowns = toTowns;
            $scope.trips = latestTrips;
        });

    $scope.createNewTrip = function(trip) {
        tripsData.saveTrip(trip);
            notifier.success('New trip created!');
            $location.path('/');
        };

}]);
