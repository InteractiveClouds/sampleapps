// this line should not be removed
var Sample2Input = angular.module("Sample2Input",['dfxAppServices']);

Sample2Input.controller( "Sample2InputController", [ '$scope', function( $scope ) {



      /*show text on click*/
    $scope.showTextOnClick = function(){
  	  $scope.showTextOnClickBoolean = true;
    };
      /*show text on doubleclick*/
    $scope.showTextOnDoubleClick = function(){
  	  $scope.showTextOnDoubleClickBoolean = true;
    };
       /*hide text when mouse leave*/
   $scope.hideTextOnMouseLeave = function(){
  	   $scope.showTextOnDoubleClickBoolean = false;
       $scope.showTextOnClickBoolean = false;
       $scope.showTextOnMouseOverBoolean = false;
   };
       /*show text when mouse leave*/
   $scope.showTextOnMouseLeave = function(){
  	   $scope.showTextOnMouseLeaveBoolean = true;
       $scope.showTextOnMouseEnterBoolean = false;
    };

      /*show text when mouse enter*/
   $scope.showTextOnMouseEnter = function(){
  	   $scope.showTextOnMouseEnterBoolean = true;
       $scope.showTextOnMouseLeaveBoolean = false
    };
      /*show text when mouse over*/
  $scope.showTextOnMouseOver = function(){
  	  $scope.showTextOnMouseOverBoolean = true;
    };


      /*simple binding*/
    $scope.auto = {
         car: 'Mercedes'
    };
      /*Dynamic Class changes text and colortext*/
    $scope.dynClassBinding = '';

      /*complex binding*/
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
      /*disable/enable input*/
  $scope.disableInput = function(){
    	$scope.disableInputBasics = !$scope.disableInputBasics;
    };

}]);
