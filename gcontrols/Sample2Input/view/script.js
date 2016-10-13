// this line should not be removed
var Sample2Input = angular.module("Sample2Input",['dfxAppServices']);

Sample2Input.controller( "Sample2InputController", [ '$scope', function( $scope ) {

    /*show text when mouse leave*/
    $scope.showTextOnMouseLeaveBoolean = false;
    $scope.showTextOnMouseLeave = function(){
        $scope.showTextOnMouseLeaveBoolean = true;

    };

    /*show text when mouse enter*/
    $scope.showTextOnMouseEnterBoolean = false;
    $scope.showTextOnMouseEnter = function(){
        $scope.showTextOnMouseEnterBoolean = true;
    };

    /*show text when mouse over*/
    $scope.showTextOnMouseOverBoolean = false;
    $scope.showTextOnMouseOver = function(){
        $scope.showTextOnMouseOverBoolean = true;
    };

    /*show text on click*/
    $scope.showTextOnClickBoolean = false;
    $scope.showTextOnClick = function(){
        $scope.showTextOnClickBoolean = !$scope.showTextOnClickBoolean;
    };
    /*show text on doubleclick*/
    $scope.showTextOnDoubleClickBoolean = false;
    $scope.showTextOnDoubleClick = function(){
        $scope.showTextOnDoubleClickBoolean = !$scope.showTextOnDoubleClickBoolean;
    };

    /*simple binding*/
    $scope.auto = {
        car: 'Mercedes'
    };

    $scope.dynClassBinding = 'abc';

    /*complex binding*/
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';

}]);
