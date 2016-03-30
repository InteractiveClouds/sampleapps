// this line should not be removed
var vStyles1 = angular.module("vStyles1",['dfxAppServices']);

vStyles1.controller( "vStyles1Controller", [ '$scope', 'dfxApiRoutes', 'dfxDialog', 'dfxSidenav', 'dfxBottomSheet', 'dfxChangeCard', function( $scope, dfxApiRoutes, dfxDialog, dfxSidenav, dfxBottomSheet, dfxChangeCard ) {

  /*
  view: vStyles1
  Purpose: demonstrates various layout and styling capabilities
  */
  
  
  
    //---------------------- Sample data to use in this view --------------------------
    $scope.candidates = [
        {"name": "John Kelly", "bio": "Self taught programmer, very dedicated and pragmatic, takes charge and focused. Well rounded personality with a balanced look on things and ways to solve problems",
        "photo": "/./assets/m01.png",
        "contact": {"facebook":"john_kelly", "twitter":"","linkedin":"john_kelly@linkedin","skype":"john_kelly@skype"},
        "skills": {"soft": 3, "technical": 4, "presentation":5},
        "interview": {"manager": 90, "peer":80, "HR":75}
        },
        {"name": "Samantha Dull", "bio": "Top programmer, gratduated with honors, developped games since the age of 12, waiting for the right opportunity to start my own business",
        "photo": "/./assets/f01.png",
        "contact": {"facebook":"samantha_dull", "twitter":"@samantha_dull","linkedin":"samantha_dull@linkedin","skype":""},
        "skills": {"soft": 5, "technical": 1, "presentation":2},
        "interview": {"manager": 80, "peer":90, "HR":95}
        },    
        {"name": "William Lang", "bio": "Expert in demistifying technology for non technical people. Always focused on making programming accessible to the masses thru the building of self taught online courses.",
        "photo": "/./assets/m02.png",
        "contact": {"facebook":"william_lang", "twitter":"@william_lang","linkedin":"william_lang@linkedin","skype":"william_lang@skype"},
        "skills": {"soft": 4, "technical": 3, "presentation":4},
        "interview": {"manager": 95, "peer":70, "HR":80}
        } 
    ];
    //---------------------- End of use case data section --------------------------
    
    //---------------------- This code is executed the first time the widget is created --------------------------
    //Display first item in the array
    $scope.currentIndex = 0
    $scope.selCandidate = $scope.candidates[$scope.currentIndex];
    
    //-------------- Change the index of the "card" to be shown" and apply it to the "model structure" used by the GC
    $scope.navigate = function(arg) {
        
        $scope.currentIndex = ($scope.currentIndex + arg) % $scope.candidates.length;
        if ($scope.currentIndex < 0) {
            $scope.currentIndex = $scope.candidates.length - 1;
        }       

        $scope.selCandidate = $scope.candidates[$scope.currentIndex]; 
        
        return '';
    };
  
    $scope.openHelp = function(anIndex) {
      var newWindow = window.open ('http://interactive-clouds.com/documentation/samples/'+ anIndex + '.html', '_blank'); 
            return '';
	};
  
  
  
}]);