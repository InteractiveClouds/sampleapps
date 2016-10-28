// this line should not be removed
var Sample1Images = angular.module("Sample1Images",['dfxAppServices']);

Sample1Images.controller( "Sample1ImagesController", [ '$scope', '$timeout', function( $scope, $timeout ) {

  	$scope.displayImage = function(){
    	$scope.displayImageBasics = !$scope.displayImageBasics;
    };

        /*show text on click*/
    $scope.showTextOnClick = function(){
  	   $scope.showTextOnClickBoolean = true;
    };

        /*show text on doubleclick*/
    $scope.showTextOnDoubleClick = function(){
  	   $scope.showTextOnDoubleClickBoolean = true;
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
       $scope.showTextOnDoubleClickBoolean = false;
     };


        /*show image on click*/
   $scope.toggleDisplay = function(){
        	$scope.toggleImageBoolean = !$scope.toggleImageBoolean;
     };
        /*simple binding*/
     $scope.imageSampleBinding = 'https://lh5.ggpht.com/9UyPxkKrxu5WO_6RmzSrVnrAka45EBfGEvMrFVnlzhcL0kmsA8a_8lc2rzFb1SBX3FY=w300'
        /*complex binding*/
     $scope.pictures = {'images': {'still_life': 'https://1.bp.blogspot.com/_SR2y-A_HtfU/Rn6bzxPM1AI/AAAAAAAAAGI/UjhcTcV24pw/s320/i+want+one.jpg'}};

        /*twist image*/
   $scope.toggleState = function(){
         $scope.isState = !$scope.isState;

       };
     }]);
