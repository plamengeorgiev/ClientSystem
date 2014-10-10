'use strict';

app.directive('tripHomeDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/trip-home-directive.html',
        scope: {
            trip: '='
        }
    }
})