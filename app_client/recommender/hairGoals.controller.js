(function() {
    angular
        .module('productRecommenderApp')
        .controller('hairGoalsCtrl', hairGoalsCtrl);

    hairGoalsCtrl.$inject = ['$scope', 'HairGoals', 'SelectedData'];

    function hairGoalsCtrl($scope, HairGoals, SelectedData) {

        var vm = this;
        vm.content = "Hair Goals";
        vm.selectedHairGoal = " ";

        if (SelectedData.selectedHairGoal !== null) {
            vm.selectedHairGoal = SelectedData.selectedHairGoal;
        }
        
         vm.getHairData = function() {
            HairGoals.getHairData()
                .then(function(response) {
                    vm.hairGoal = response.data;
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

            vm.selectedHairGoal = null;
        }
    }
})