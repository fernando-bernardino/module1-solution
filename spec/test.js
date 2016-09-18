describe('LunchCheck', function() {

    beforeEach(module('LunchCheck'));

    var $controller;

  	beforeEach(angular.mock.inject(function(_$controller_){
  	  $controller = _$controller_;
  	}));

    it("no values gives 'Please enter data first'", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Please enter data first");
    });

    it("Empty string gives 'Please enter data first'", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "                 ";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Please enter data first");
    });

    it("Simple word gives 'Enjoy'", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "dish";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Enjoy!");
    });

    it("Three words gives 'Enjoy'", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "dish 1, dish 2, dish 3";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Enjoy!");
    });

    it("Four words gives 'Too much'", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "dish 1, dish 2, dish 3, dish 4";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Too much!");
    });

    it("Multiple consecutive ',' do not count as dish", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "dish 1, dish 2, dish 3,,";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Enjoy!");
    });

    it("Empty dishes do not count as dish", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "dish 1, dish 2, dish 3,        ,";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Enjoy!");
    });

    it("Only dishes gives 'Please enter data first'", function(){
      var $scope = {};
      var controller = $controller('LunchCheckController', { $scope: $scope });

      $scope.lunch = "     ,        ,       ,        ,";
      $scope.calculateLunchMessage();

      expect($scope.lunchMessage).toBe("Please enter data first");
    });

});
