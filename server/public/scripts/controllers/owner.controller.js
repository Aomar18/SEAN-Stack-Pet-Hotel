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
            url: '/owner',
            data: ownerToAdd
        }).then(function (response) {
            getOwner();
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



    
    vm.deleteOwner = function (ownerid) {
        console.log(ownerid.id)
        $http({
            method: 'DELETE',
            url: '/owner/' + ownerid.id
        }).then(function (response) {
            alert('owner deleted.');
             getOwner();
        }).catch(function (error) {
            alert('Unable to delete owner');
            console.log(error);
        })
    }

})