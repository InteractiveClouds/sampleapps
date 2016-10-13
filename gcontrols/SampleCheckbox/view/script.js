// this line should not be removed
var SampleCheckbox = angular.module("SampleCheckbox",['dfxAppServices']);

SampleCheckbox.controller( "SampleCheckboxController", [ '$scope', function( $scope ) {
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
    $scope.showTextOnClickBoolean = false;
    $scope.showTextOnClick = function(){
        $scope.showTextOnClickBoolean = !$scope.showTextOnClickBoolean;
    };

    /*change color text dynamic Style*/
    $scope.changeCheckboxColor = false;
    $scope.changeCheckbox = function(){
        $scope.changeCheckboxColor = !$scope.changeCheckboxColor;
    };

    $scope.changeCheckbox2Style = true;
    $scope.changeBackCheckbox = function(){
        $scope.changeCheckbox2Style = $scope.changeCheckbox5Style;
    };


    /*show text when mouse leave*/
    $scope.showTextOnMouseLeaveBoolean = false;
    $scope.showTextOnMouseLeave = function(){
        $scope.showTextOnMouseLeaveBoolean = true;
        $scope.showTextOnMouseOverBoolean = false;
    };

    /*show text when mouse over*/
    $scope.showTextOnMouseOverBoolean = false;
    $scope.showTextOnMouseOver = function(){
        $scope.showTextOnMouseOverBoolean = true;
        $scope.showTextOnMouseLeaveBoolean = false;
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

    /*hide text on click*/
    $scope.hideTextOnClick = function(){
        $scope.showTextOnMouseOverBoolean = false;
        $scope.showTextOnMouseLeaveBoolean = false;
    };


}]);
