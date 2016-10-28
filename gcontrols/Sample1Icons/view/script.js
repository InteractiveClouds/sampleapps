// this line should not be removed
var Sample1Icons = angular.module("Sample1Icons",['dfxAppServices']);

Sample1Icons.controller( "Sample1IconsController", [ '$scope', '$timeout', function( $scope, $timeout ) {
	var changeIconColor;

      /*change icon color*/
	 $scope.changeIcon = function(){
    	$scope.changeIconColor = !$scope.changeIconColor;
    };
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
       $scope.showTextOnClickBoolean = false;
       $scope.showTextOnDoubleClickBoolean = false;
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
     $scope.onMouseLeave = function(){
  	  $scope.showTextOnMouseOverBoolean = false;
    };
      /*change icon with binding*/
  	$scope.iconBinding = 'twitter';
	  $scope.iconBindingLabel = 'Twitter';

    $scope.iconState = true;

      /* actived an interactive icon waiting */
  	$scope.simulateLoad = function () {
    	$scope.loadingStatus = true;
      	$timeout( function() {
        	$scope.loadingStatus = false;
        }, 5000);
    };
}]);
