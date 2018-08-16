angular.module("multiLinePlaceHolder", [])
.controller("myCtrl", function($scope) {
    $scope.textAreaInput = "";
    $scope.handleTextAreaEdit = myEvent => {
        if (!myEvent) {
            return;
        }

        let length = myEvent.target.value.length;
        length > 0 ?
            myEvent.target.classList.add("data-edits"):
            myEvent.target.classList.remove("data-edits");
    };

    let scrollTop = 0;
    $scope.mouseWheelHandler = myEvent => {
        myEvent.deltaY < 0 ?
            document.getElementById("uniq").scrollTop = scrollTop -= 10:
            document.getElementById("uniq").scrollTop = scrollTop += 10;
    };
})
.directive("ngWheel", ["$parse", $parse => {
    return (scope, element, attr) => {
        const fn = $parse(attr.ngWheel);
        element.bind("mousewheel", event => {
            scope.$apply(() => {
                fn(scope, {
                    $event: event
                });
            });
        });
    };
}]);
