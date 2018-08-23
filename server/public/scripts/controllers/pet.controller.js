PetHotelApp.controller('PetController' , function($http){
    const vm = this;

    //PETS ARRAY
    vm.pets = [];

    const petToAdd = {
        owner_id: '',
        name: '',
        breed: '',
        color: '',
        checkedin: '',
        lastcheckin: ''
    }




//GET FUNCTION PETS
function getPets() {
    $http({
        method: 'GET',
        url: '/pet'
    }).then(function (response) {
        vm.pets = [];
        vm.pets = response.data;
    }).catch(function (error) {
        alert('error receiving owner profile information in get route');
        console.log('Error', error);
    });// End GET
}
getPets();

vm.addPet = function (petToAdd) {
    console.log(petToAdd);
    $http({
        method: 'POST',
        url: '/home',
        data: petToAdd
    }).then(function (response) {
        console.log('Input received');
    }).catch(function (error) {
        alert('error adding new pet to data');
        console.log('Error', error);
    });//End POST 
}



})