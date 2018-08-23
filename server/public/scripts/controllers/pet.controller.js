PetHotelApp.controller('PetController' , function($http){
    const vm = this;



    function getPets(){
        $http({
            method: 'GET',
            url: '/pet'
        }).then(function(response) {
            vm.petList=[];
            vm.petList = response.data;
        }).catch(function(error) {
            alert('error receiving owner profile information in get route');
            console.log('Error', error);
        });// End GET
    }


getPets();

})