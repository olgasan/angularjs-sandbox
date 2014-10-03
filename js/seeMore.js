app.directive('verMas', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<div><p class="ver-mas"></p><a class="btn btn-default">Ver mas</a></div>',
        link: function(scope, elem, attrs) {

            elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});
