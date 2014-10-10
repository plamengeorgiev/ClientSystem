'use strict';

app.factory('authorization', ['identity', function(identity) {
    return {
        getAuthorizationHeader: function() {
            return {
                'Authorization': 'bearer ' + identity.getCurrentUser()['access_token']
            }
        }
    }
}]);