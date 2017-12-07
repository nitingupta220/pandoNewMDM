var app = angular.module('MDM', ['ngRoute']);
app.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'pages/users.html',
            controller: 'usersController'
        })
        .when('/bu&cc', {
            templateUrl: 'pages/bu&cc.html',
            controller: 'buController'
        })
        .when('/consignees', {
            templateUrl: 'pages/consignees.html',
            controller: 'consigneesController'
        })
        .when('/logorg', {
            templateUrl: 'pages/logorg.html',
            controller: 'logorgController'
        })
        .when('/vendor', {
            templateUrl: 'pages/vendor.html',
            controller: 'vendorController'
        })
        .when('/material', {
            templateUrl: 'pages/material.html',
            controller: 'materialController'
        })
        .when('/rate', {
            templateUrl: 'pages/rate.html',
            controller: 'rateController'
        })
        .when('/detention', {
            templateUrl: 'pages/detention.html',
            controller: 'detentionController'
        });

});
app.controller('usersController', function ($scope) {
    'use strict';
    
});
app.controller('buController', function ($scope) {
    'use strict';
    
});
app.controller('consigneesController', function ($scope) {
    'use strict';
    
});
app.controller('logorgController', function ($scope) {
    'use strict';
    
});
app.controller('vendorController', function ($scope) {
    'use strict';
    
});
app.controller('materialController', function ($scope) {
    'use strict';
    
});
app.controller('rateController', function ($scope) {
    'use strict';
    
});
app.controller('detentionController', function ($scope) {
    'use strict';
    
});



$(document).ready(function () {
    'use strict';
    $('.fa-plus').click(function () {
        $('.table').prepend('<tr><td><span><i class="fa fa-floppy-o"></i></span><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td ><input type="text"><span><i class="fa fa-times remove"></i></span></td></tr>');
    });

});
$(document).ready(function () {
    'use strict';
    $('.remove').click(function () {
        $(this).closest('tr').remove();
    });
});
