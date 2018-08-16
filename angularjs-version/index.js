var app = angular.module("multiLinePlaceHolder", []); 
app.controller("myCtrl", function($scope) {
    $scope.handleTextAreaEdit = function (myEvent) {
        let length = myEvent.target.value.length;
        if (length > 0) {
            // myEvent.target.classList.remove("trans");
            myEvent.target.classList.add("data-edits");
        } else {
            myEvent.target.classList.remove("data-edits");
            // myEvent.target.classList.add("trans");
        }
    };

    let scrollTop = 0;
    $scope.mouseWheelHandler = function (myEvent) {
        myEvent.deltaY < 0 ?
		    document.getElementById("uniq").scrollTop = scrollTop-=10:
		    document.getElementById("uniq").scrollTop = scrollTop+=10;
    };
});

app.directive("ngWheel", ["$parse", function($parse) {
    return function(scope, element, attr) {
      var fn = $parse(attr.ngWheel);

      element.bind("mousewheel", function(event) {
        scope.$apply(function() {
          fn(scope, {
            $event: event
          });
        });
      });
    };
}]);
