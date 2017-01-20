angular.module('myApp', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/about');


    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'about.html'
    });

    $stateProvider.state('experince', {
        url: '/experince',
        templateUrl: 'experince.html'
    });

    $stateProvider.state('education', {
        url: '/education',
        templateUrl: 'education.html'
    });

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
    });

}]);
