'use strict';

app.filter('sortFilter', function() {
    return function(input) {
        input = parseInt(input);
        switch (input) {
            case 'Date': return "trips.departureDate"; break;
            case 'Driver': return "trips.driverName"; break;
            case 'From': return "trips.from"; break;
            case 'To': return "trips.to"; break;
        }
    }
});