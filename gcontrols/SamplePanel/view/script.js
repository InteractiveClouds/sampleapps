// this line should not be removed
var SamplePanel = angular.module("SamplePanel",['dfxAppServices']);

SamplePanel.controller( "SamplePanelController", [ '$scope', function( $scope ) {

    /*dynamic Style change color*/
    $scope.changeColumnColor = false;
    $scope.changeColumn = function(){
        $scope.changeColumnColor = !$scope.changeColumnColor;
    };

    /*complex binding*/

    $scope.adress = '';
    $scope.city = '';
    $scope.zip = '';

    $scope.firstName = '';
    $scope.lastName = '';
    $scope.birthday = '';
    $scope.phone_number = '';
    $scope.email = '';




    /*hide inputs on click*/
    $scope.toggleInputBoolean = false;
    $scope.toggleDisplay = function(){
        $scope.toggleInputBoolean = true;
        console.log($scope.firstName, $scope.lastName)
    };
    /*show text on click*/
    $scope.toggleTextBoolean = false;
    $scope.toggleDisplay2 = function(){
        $scope.toggleTextBoolean = !$scope.toggleTextBoolean;
    };

    $scope.toggleIconBoolean = false;
    $scope.toggleDisplay3 = function(){
        $scope.toggleIconBoolean = !$scope.toggleIconBoolean;
    };
}]);

