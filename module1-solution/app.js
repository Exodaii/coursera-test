(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = ""; // List of items in textbox
    $scope.feedback = ""; // Feedback message on click
    $scope.countItemsFeedback = function() { // Generates feedback based on specific
      // items in lunch-menu textbox
      var feedbackMessage = giveFeedback($scope.items)
      $scope.feedback = feedbackMessage;
    }
  };

  function countItems(string) { // Counts number of comma delimited items in string
    var numItems = string.split(",").length
    if (string == "") {
      return 0
    }
    else {
      return numItems
    }
  }

  function giveFeedback(string) { // Gives feedback based on number of comma
    // delimited items passed in
    if (string == "") {
      return "Please enter data first"
    }
    else {
      var numItemsMenu = countItems(string)
      if (numItemsMenu <= 3) {
        return "Enjoy!";
      }
      else {
        return "Too much!";
      }
    }
  }

})();
