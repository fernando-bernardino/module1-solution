(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.lunchMessage = "";

    var noFoodMessage = "Please enter data first";
    var tooMuchMessage = "Too much!";
    var notTooMuchMessage = "Enjoy!";
    var limit = 3;

    $scope.calculateLunchMessage = function () {
      $scope.lunchMessage = getLunchMessage($scope.lunch);
    }

    function getLunchMessage(string) {
      var numberElements = getNonEmptyCommaSeparatedElements(string);

      if(numberElements == 0) {
        return noFoodMessage;

      } else if(numberElements > limit){
        return tooMuchMessage;

      } else {
        return notTooMuchMessage;
      }
    }

    function getNonEmptyCommaSeparatedElements(string) {
      var splitElements = string.split(",");
      var countOfNonEmptyElements = 0;

      for(var i = 0; i < splitElements.length; i++) {
        if(splitElements[i].trim().length > 0) {
          countOfNonEmptyElements ++;
        }
      }

      return countOfNonEmptyElements;
    }
  };

})();
