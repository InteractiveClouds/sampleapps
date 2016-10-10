// this line should not be removed
var SampleButtons = angular.module("SampleButtons", ['dfxAppServices']);

SampleButtons.controller( "SampleButtonsController", [ '$scope', '$timeout', 'dfxChangeCard', function( $scope, $timeout, dfxChangeCard ) {
    var changeButtonColor;

    /* show/hide toggle button */
    $scope.toggleButtonBoolean = false;
    $scope.toggleDisplay = function(){
        $scope.toggleButtonBoolean = !$scope.toggleButtonBoolean;
    };

    /* change icon color on click */
    $scope.changeButtonColor = false;
    $scope.buttonHeartColor = function(){
        $scope.changeButtonColor = !$scope.changeButtonColor;
    };

    /* appeared a dialog box on click */
    $scope.showDialog = function(){
        alert ('Button clicked!')
    };

    /* actived an interactive map waiting */
    $scope.loadingStatus = false;
    $scope.simulateLoad = function () {
        $scope.loadingStatus = true;
        $timeout( function() {
            $scope.loadingStatus = false;
        }, 5000);
    };
    /* switch cards */
    $scope.goToHelp = function () {
        var options = {
            viewName : 'SampleButtons',
            cardName : 'help',
            scope : $scope
        }
        dfxChangeCard.showCard(options);
    };
    /* switch back cards */
    $scope.goToDefault = function () {
        var options = {
            viewName : 'SampleButtons',
            cardName : 'default',
            scope : $scope
        }
        dfxChangeCard.showCard(options);
    };
    /*change style at button*/
    $scope.changeButtonStyleBoolean = false;
    $scope.changeButtonStyle = function(){
        $scope.changeButtonStyleBoolean = !$scope.changeButtonStyleBoolean
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





}]);

