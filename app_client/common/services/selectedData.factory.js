(function() {

  angular
    .module('productRecommenderApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedHairID: '',
          selectedHairPattern: '',
          selectedHairIssue: ' ',
          selectedHairGoal: ' ',
      };
  }

})();