PetHotelApp.controller('HomeController', function ($http) {
    const vm = this;

    //OWNERS ARRAY
    vm.ownerToAdd = {
        first_name: '',
        last_name: ''
    }

    //PETS ARRAY
    vm.petToAdd = {
        owner_id: '',
        name:'',
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
        });//End POST 
    }


    //ADD PET FUNCTION




});