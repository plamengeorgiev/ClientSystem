'use strict';

app.controller('DriversController', ['$scope', 'notifier', 'driversData', 'identity', function($scope, notifier, driversData, identity) {
    $scope.identity = identity;

    //public
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
            $scope.driversCount = drivers.length;
        });
}]);
