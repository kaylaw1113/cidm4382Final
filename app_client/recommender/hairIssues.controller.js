(function() {
    angular
        .module('productRecommenderApp')
        .controller('hairIssuesCtrl', hairIssuesCtrl);

    hairIssuesCtrl.$inject = ['$scope', 'HairIssue', 'SelectedData'];

    function hairIssuesCtrl($scope, HairIssue, SelectedData) {

        var vm = this;
        vm.content = "Hair Issues";
        vm.selectedHairIssue = " ";

        if (SelectedData.selectedHairIssue !== null) {
            vm.selectedHairIssue = SelectedData.selectedHairIssue;
        }
        
         vm.getHairIssuesData = function() {
            HairIssue.getHairIssuesData()
                .then(function(response) {
                    vm.hairIssue = response.data;
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

            vm.selectedHairIssue = null;
        }
    }
})