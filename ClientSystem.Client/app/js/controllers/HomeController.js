'use strict';

app.controller('HomeController', ['$scope', 'notifier', 'tripsData', 'driversData', function($scope, notifier, tripsData, driversData) {

    tripsData
            .getAllTrips()
            .$promise
            .then(function (trips) {
                var latestTrips = [];

                for (var i = trips.length - 1; i >= 0; i--) {
                    if (latestTrips == 10) {
                        break;
                    }

                    if (latestTrips.length < 10) {
                        latestTrips.push(trips[i]);
                    }
                }

                $scope.trips = latestTrips;
            });

        driversData
            .getAllDrivers()
            .$promise
            .then(function(drivers){
                var latestDrivers = [];
                for (var i = drivers.length -1; i>=0; i--){
                    if (latestDrivers == 10){
                        break;
                    }

                    if (latestDrivers.length < 10){
                        latestDrivers.push(drivers[i]);
                    }
                }

                $scope.drivers = latestDrivers;
            });
}]);
