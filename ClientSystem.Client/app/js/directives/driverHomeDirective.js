'use strict';

app.directive('driverHomeDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/driver-home-directive.html',
        scope: {
            driver: '='
        }
    }
})