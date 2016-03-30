// this line should not be removed
var inputSample = angular.module("inputSample",['dfxAppServices']);

inputSample.controller( "inputSampleController", [ '$scope', 'dfxApiRoutes', 'dfxDialog', 'dfxSidenav', 'dfxBottomSheet', 'dfxChangeCard', function( $scope, dfxApiRoutes, dfxDialog, dfxSidenav, dfxBottomSheet, dfxChangeCard ) {
	$scope.firstName = "";
  	$scope.lastName = "";
    $scope.email = "";
  	$scope.password = "";
  	$scope.repassword = "";
  	$scope.DOB = new Date();
    $scope.dynamicValue = "Hello world!!!";
    $scope.val = "sample-gray ";

    $scope.submitClick = function() {
      var dialogContent = "<b>Hi " + $scope.firstName + " " + $scope.lastName + "!</b><br>";
          dialogContent += "<b>you were successfully registered<br> email - " + $scope.email + "<br>password - " + $scope.password + " </b>";
		var options = {
			title : "Registartion complete",
			html : dialogContent,
			flexWidth : '30',
			height : '300px',
			buttons : [{name : 'Next', action :'nextButtonAction()'}],
			scope : $scope
		}
		$scope.htmlDialogInstance = dfxDialog.showHTML(options);
		$scope.nextButtonAction = function() {
				$scope.htmlDialogInstance.hide();
				$scope.next();
    }
    }
    
    $scope.next = function() {
        var options = {
          viewName : 'inputSample',
          cardName : 'examples',
          scope : $scope
        }
        dfxChangeCard.showCard(options);
    }
    
    $scope.back = function () {
		var options = {
				viewName : 'inputSample',
				cardName : 'default',
				scope : $scope
		}
		dfxChangeCard.showCard(options);
	}

    $scope.onChangeEvent = function () {
		var options = {
				html : 'OnChange event was triggered!<br>Click outside for close',
				width : '400px',
				position : 'left',
				scope : $scope
		}
		$scope.sideNavHtmlInstance = dfxSidenav.showHTML(options);
	}

        
}]);
