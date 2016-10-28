// this line should not be removed
var Sample4Checkbox = angular.module("Sample4Checkbox",['dfxAppServices']);

Sample4Checkbox.controller( "Sample4CheckboxController", [ '$scope', function( $scope ) {
	$scope.checkboxItems = [
		{
			"trueCheckValue": true,
			"falseCheckValue": false,
			"label": "Banana"
		},
		{
			"trueCheckValue": true,
			"falseCheckValue": false,
			"label": "Apple"
		},
		{
			"trueCheckValue": true,
			"falseCheckValue": false,
			"label": "Orange"
		}
	];
	/* Basic Check Answers demo */
  	$scope.check_answers = ['no', false];
  	$scope.check_disabled = false;

  	$scope.selectedCheckboxItem = [true, false, false];

        /*sample binding*/
    $scope.bin = 'I like a car';
    $scope.bin2 = 'I like a train';

       /*show text on click*/
    $scope.showTextOnClick = function(){
  	   $scope.showTextOnClickBoolean = true;
    };

       /*change color text dynamic Style*/
	$scope.changeCheckbox = function(){
       $scope.changeCheckboxColor = !$scope.changeCheckboxColor;
    };
         /*show text when mouse enter*/
    $scope.showTextOnMouseEnter = function(){
	   $scope.showTextOnMouseEnterBoolean = true;
	   $scope.showTextOnMouseLeaveBoolean = false;
    };
       /*show text when mouse leave*/
    $scope.showTextOnMouseLeave = function(){
  	   $scope.showTextOnMouseLeaveBoolean = true;
       $scope.showTextOnMouseEnterBoolean = false;
    };

       /*show text when mouse over*/
    $scope.showTextOnMouseOver = function(){
  	   $scope.showTextOnMouseOverBoolean = true;
    };

       /*show text on doubleclick*/
    $scope.showTextOnDoubleClick = function(){
  	   $scope.showTextOnDoubleClickBoolean = true;
    };

       /*hide text on click*/
    $scope.hideTextOnClick = function(){
       $scope.showTextOnMouseEnterBoolean = false;
       $scope.showTextOnMouseLeaveBoolean = false;
    };
       /*hide text when mouse leave*/
    $scope.hideTextOnMouseLeave = function(){
       $scope.showTextOnDoubleClickBoolean = false;
       $scope.showTextOnClickBoolean = false;
       $scope.showTextOnMouseOverBoolean = false;
    };

       /*disable/enable datepicker*/
    $scope.disableCheckbox = function(){
       $scope.disableCheckboxBasics = !$scope.disableCheckboxBasics;
    };


}]);
