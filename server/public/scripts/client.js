let PetHotelApp = angular.module('PetHotelApp' , ['ngRoute']);

PetHotelApp.config(function($routeProvider){
    $routeProvider.when('/' , {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/pet' , {
        templateUrl: 'views/pet.html' ,
        controller: 'PetController as pc'
    }).when('/owner' , {
        tempateUrl: 'views/owner.html' ,
        controller: 'OwnerController as oc'
    }).otherwise(`<h1>Error 404: PAGE NOT FOUND</h1>
                        <br>
                <p> Sorry, no pets on this page! </p> `)
})