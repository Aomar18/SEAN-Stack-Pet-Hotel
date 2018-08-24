PetHotelApp.controller('OwnerController', function ($http) {
    const vm = this;


    //OWNERS ARRAY
    vm.owners = [];

    const ownerToAdd = {
        first_name: '',
        last_name: ''
    }

    //ADD OWNER FUNCTION
    vm.addOwner = function (ownerToAdd) {
        console.log(ownerToAdd);

        $http({
            method: 'POST',
            url: '/home',
            data: ownerToAdd
        }).then(function (response) {
            console.log('Input received');
        }).catch(function (error) {
            alert('error adding new owner to list');
            console.log('Error', error);
        });
    }

    //End POST 


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
})