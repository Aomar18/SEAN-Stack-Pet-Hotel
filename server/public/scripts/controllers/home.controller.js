PetHotelApp.controller('HomeController', function ($http) {
    const vm = this;

    //OWNERS ARRAY
    vm.owners = [];

    const ownerToAdd = {
        first_name: '',
        last_name: ''
    }


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



    //ADD OWNER FUNCTION
    vm.addOwner = function (owners) {
        console.log(owners);

        $http({
            method: 'POST',
            url: '/home',
            data: owners
        }).then(function (response) {
            console.log('Input received');
        }).catch(function (error) {
            alert('error adding new owner to list');
            console.log('Error', error);
        });
    }

    //End POST 

    //ADD PET FUNCTION


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

//GET FUNCTION OWNER
    function getOwner() {
        $http({
            method: 'GET',
            url: '/owner'
        }).then(function (response) {
            vm.owners = [];
            vm.owners = response.data;
        }).catch(function (error) {
            alert('error receiving owner profile information in get route');
            console.log('Error', error);
        });// End GET
    }


    getOwner();


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


});