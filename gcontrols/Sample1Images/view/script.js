// this line should not be removed
var Sample1Images = angular.module("Sample1Images",['dfxAppServices']);

Sample1Images.controller( "Sample1ImagesController", [ '$scope', '$timeout', function( $scope, $timeout ) {



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


    /*show image on click*/
    $scope.toggleImageBoolean = false;
    $scope.toggleDisplay = function(){
        $scope.toggleImageBoolean = !$scope.toggleImageBoolean;
    };
    /*simple binding*/
    $scope.imageSampleBinding = 'http://oi44.tinypic.com/9asbk3.jpg'
    /*complex binding*/
    $scope.pictures = {'images': {'still_life': 'https://hd.unsplash.com/photo-1428189923803-e9801d464d76'}};

    $scope.isState = false;
    $scope.toggleState = function(){
        $scope.isState = !$scope.isState;

    };
}]);
