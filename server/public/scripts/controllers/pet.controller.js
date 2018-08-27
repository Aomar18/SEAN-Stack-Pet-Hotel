PetHotelApp.controller('PetController', function ($http) {
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
    vm.addPet = function (petToAdd) {
        console.log(petToAdd);
        $http({
            method: 'POST',
            url: '/pet',
            data: petToAdd
        }).then(function (response) {
            getPets();
            console.log('Input received');
        }).catch(function (error) {
            alert('error adding new pet to data');
            console.log('Error', error);
        });//End POST 
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



})


deletePet = function (pet_id) {
    $http({
        method: 'DELETE',
        url: '/pet/' + pet_id
    }).then(function (response) {
        alert('pet deleted.');
        getPets();
    }).catch(function (error) {
        alert('Unable to delete pet');
        console.log(error);
    })
}