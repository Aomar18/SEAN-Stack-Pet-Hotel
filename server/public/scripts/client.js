let PetHotelApp = angular.module('PetHotelApp' , ['ngRoute']);

PetHotelApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/pet', {
        templateUrl: 'views/pet.html' ,
        controller: 'PetController as pc'
    }).when('/owner', {
        tempateUrl: 'views/owner.html' ,
        controller: 'OwnerController as oc'
    }).otherwise('/error' , {
        tempate: 'views/404.html'
    })
})