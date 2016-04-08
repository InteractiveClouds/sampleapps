// this line should not be removed
var tableSample = angular.module("vTableSample",['dfxAppServices']);

tableSample.controller( "vTableSampleController", [ '$scope', 'dfxApiRoutes', 'dfxDialog', 'dfxSidenav', 'dfxBottomSheet', 'dfxChangeCard', function( $scope, dfxApiRoutes, dfxDialog, dfxSidenav, dfxBottomSheet, dfxChangeCard ) {
  $scope.sample1TableContent = [
          {"id":1, "name" : "Jhon", "surname" : "Doe", "position" : "<H1>JS Programmer</H1>", "salary" : "1500", "picture" : "/assets/pic1.jpg"}, 
          {"id":2, "name" : "Denis", "surname" : "Forsberg", "position" : " <b>CSS Programmer</b>", "salary" : "1200", "picture" : "/assets/pic2.jpg"}, 
          {"id":3, "name" : "Alan", "surname" : "Smith", "position" : "<H2>HR Manager</H2>", "salary" : "1700","picture" : "/assets/pic4.jpg"},
          {"id":4, "name" : "Felix", "surname" : "Goldman", "position" : "Java Programmer", "salary" : "2000","picture" : "/assets/pic3.jpg"},
          {"id":5, "name" : "Jim", "surname" : "Caters", "position" : "PHP Developer", "salary" : "1400", "picture" : "/assets/pic5.jpg"}
        ];
  
  $scope.editEmployee = function (row) {
		var options = {
				width : '300px',
				position : 'left',
				viewName : 'vTableSample',
				cardName : 'edit',
				scope : $scope
		}
        $scope.name = row.name;
    	$scope.surname = row.surname;
        $scope.position = row.position;
        $scope.salary = row.salary;
    	$scope.picture = row.picture;
    	$scope.currentRow = row;
		
    	$scope.sideNavViewInstance = dfxSidenav.showView(options);
 }

 $scope.doEditEmployee = function() {
    $scope.sample1TableContent.forEach(function(content, index){
         if (content.id === $scope.currentRow.id) {
         	$scope.sample1TableContent[index].name = $scope.name;
            $scope.sample1TableContent[index].surname = $scope.surname;
            $scope.sample1TableContent[index].position = $scope.position;
            $scope.sample1TableContent[index].salary = $scope.salary;
            $scope.sample1TableContent[index].picture = $scope.picture;
         }
    });
   	$scope.sideNavViewInstance.close();
 }
 
 $scope.addEmployee = function () {
		var options = {
				width : '300px',
				position : 'left',
				viewName : 'vTableSample',
				cardName : 'add',
				scope : $scope
		}
		$scope.sideNavViewInstance = dfxSidenav.showView(options);
 }
 
 $scope.doAddEmployee = function () {
 	var maxIndex = 0;
   	$scope.sample1TableContent.forEach(function(content){
    	if (content.id > maxIndex) {
        	maxIndex = content.id;
        }
    });
     $scope.sample1TableContent.push({
       "id" : maxIndex + 1,
       "name" : $scope.name,
       "surname" : $scope.surname,
       "position" : $scope.position,
       "salary" : $scope.salary,
       "picture" : $scope.picture,
     });
   $scope.sample1TableContent = angular.copy($scope.sample1TableContent);
   $scope.sideNavViewInstance.close();
 }
 
$scope.deleteEmployee = function (row) {
		var options = {
			title : "Confirm dialog",
			html : '<H3 align="center">Are you sure want remove this row?</H3>',
			flexWidth : '20',
			height : '100px',
			buttons : [{name : 'OK', action :'okButtonAction()'},{name : 'Cancel', action : 'cancelButtonAction()'}],
			scope : $scope
		}
		$scope.htmlDialogInstance = dfxDialog.showHTML(options);
		$scope.okButtonAction = function() {
		  var index = $scope.sample1TableContent.indexOf(row);
          $scope.sample1TableContent.splice( index, 1 );
          $scope.sample1TableContent = angular.copy($scope.sample1TableContent);
          $scope.htmlDialogInstance.hide();
		}
		$scope.cancelButtonAction = function() {
				$scope.htmlDialogInstance.hide();
		}
}

$scope.selectEmployee = function(row) {
        var html = '<div align="center"><H1>' + row.name + "  " + row.surname + '</H1>'
        		 + row.position
        		 + '<b><h2>Salary : ' + row.salary + ' USD</h2></b>'
        		 + '<img src="' + row.picture + '"></img></div>';
        		 
		var options = {
			title : row.name + "  " + row.surname,
			html : html,
			flexWidth : '20',
			height : '400px',
			buttons : [{name : 'Close', action : 'cancelButtonAction()'}],
			scope : $scope
		}
		$scope.htmlDialogInstance = dfxDialog.showHTML(options);
		$scope.cancelButtonAction = function() {
				$scope.htmlDialogInstance.hide();
		}
}

 $scope.closeSideNav = function() {
 	$scope.sideNavViewInstance.close();
 }
}]);
