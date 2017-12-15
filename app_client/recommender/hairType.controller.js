(function() {

    angular
        .module('productRecommenderApp')
        .controller('hairTypeCtrl', hairTypeCtrl);

    hairTypeCtrl.$inject = ['$scope', 'HairType', 'SelectedData'];

    function hairTypeCtrl($scope, HairType, SelectedData) {

        var vm = this;
        vm.content = "Hair Type";
        vm.selectedHairID = " ";
        vm.selectedHairPattern = " ";

        //check selected hair ID type
        if (SelectedData.selectedHairID !== null) {
            vm.selectedHairID = SelectedData.selectedHairID;
        }

        //check selected pattern
        if (SelectedData.selectedHairPattern !== null) {
            vm.selectedHairPattern = SelectedData.selectedHairPattern;
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getHairTypeData = function() {
            HairType.getHairTypeData()
                .then(function(response) {
                    vm.hairType = response.data;
                    console.log(response);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
        vm.toggleMenu = function() {
            if (vm.class === "toggled") {
                vm.class = "";
            }
            else {
                vm.class = "toggled";
            }
            console.log(vm.class + " is good");
        };

        vm.clearSelectedData = function() {

            vm.selectedHairID = null;
            vm.selectedHairPattern = null;
        }

    }
})