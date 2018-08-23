PetHotelApp.controller('OwnerController' , function($http){
    const vm = this;


    




    function getOwner(){
        $http({
            method: 'GET',
            url: '/owner'
        }).then(function(response) {
            vm.ownerList=[];
            vm.ownerList = response.data;
        }).catch(function(error) {
            alert('error receiving owner profile information in get route');
            console.log('Error', error);
        });// End GET
    }


getOwner();

})