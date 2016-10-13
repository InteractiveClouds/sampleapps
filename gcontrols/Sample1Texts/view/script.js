// this line should not be removed
var Sample1Texts = angular.module("Sample1Texts",['dfxAppServices']);
/*Samples texts with scope controllers*/
Sample1Texts.controller( "Sample1TextsController", [ '$scope', 'dfxChangeCard', function( $scope, dfxChangeCard ) {

    /*simple binding*/
    $scope.sampleBindVar = "Simple Binding";

    /*complex binding*/
    $scope.sampleBindVarName = "John";

    /*sample lenght text*/
    $scope.sampleLengthShort = 'Hi';
    $scope.sampleLengthLong = 'This is an example of a long text string in Sample Texts';


    /*show text on click*/
    $scope.showTextOnClickBoolean = false;
    $scope.showTextOnClick = function(){
        $scope.showTextOnClickBoolean = !$scope.showTextOnClickBoolean;
    };

    /*show text when mouse leave*/
    $scope.showTextOnMouseLeaveBoolean = false;
    $scope.showTextOnMouseLeave = function(){
        $scope.showTextOnMouseLeaveBoolean = true;
        $scope.showTextOnMouseEnterBoolean = false;
    };

    /*show text when mouse enter*/
    $scope.showTextOnMouseEnterBoolean = false;
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
    $scope.showTextOnMouseOverBoolean = false;
    $scope.showTextOnMouseOver = function(){
        $scope.showTextOnMouseOverBoolean = true;
    };
    $scope.hideTextOnMouseLeave = function(){
        $scope.showTextOnMouseOverBoolean = false;
    };
    /*change color text dynamic Style*/
    $scope.changeTextColor = false;
    $scope.changeText = function(){
        $scope.changeTextColor = !$scope.changeTextColor;
    };



}]);
