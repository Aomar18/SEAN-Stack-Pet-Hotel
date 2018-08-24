let PetHotelApp = angular.module('PetHotelApp' , ['ngRoute']);

PetHotelApp.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/pet.html' ,
        controller: 'PetController as pc'
    }).when('/owner', {
        templateUrl: 'views/owner.html' ,
        controller: 'OwnerController as oc'
    }).otherwise({
        template: 'views/404.html'
    })
})