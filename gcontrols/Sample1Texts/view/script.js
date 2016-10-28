// this line should not be removed
var Sample1Texts = angular.module("Sample1Texts",['dfxAppServices']);
     /*Samples texts with scope controllers*/
Sample1Texts.controller( "Sample1TextsController", [ '$scope', 'dfxChangeCard', function( $scope, dfxChangeCard ) {

       /*simple binding*/
    $scope.sampleBindVar = "Simple binding with a scope variable";

       /*complex binding*/
    $scope.sampleBindVarExp = "Complex binding with an expression";

       /*show text on click*/
    $scope.showTextOnClick = function(){
  	   $scope.showTextOnClickBoolean = true;
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
      /*hide text on click*/
    $scope.hideTextOnClick = function(){
       $scope.showTextOnMouseEnterBoolean = false;
       $scope.showTextOnMouseLeaveBoolean = false;
    };

      /*show text when mouse over*/
    $scope.showTextOnMouseOver = function(){
  	   $scope.showTextOnMouseOverBoolean = true;
    };
      /*hide text when mouse leave*/
    $scope.hideTextOnMouseLeave = function(){
  	   $scope.showTextOnMouseOverBoolean = false;
       $scope.showTextOnClickBoolean = false;
     };

  	/*change color text dynamic Style*/
	$scope.changeText = function(){
    	$scope.changeTextColor = !$scope.changeTextColor;
    };



  }]);
