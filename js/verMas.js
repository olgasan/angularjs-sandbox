app.directive('verMas', ['$compile', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, element, attrs) {
            scope.collapsed = false;

            scope.toggle = function() {
                scope.collapsed = !scope.collapsed;
            };

            attrs.$observe('verMas', function(longitud) {
                var util = utils.verMas;
                util.original = element.text();
                util.longitudResumen = longitud;

                if (util.debeMostrarVerMas()) {
                    var firstSpan = $compile('<span>' + util.primeraParte() + '</span>')(scope);
                    var secondSpan = $compile('<span ng-if="collapsed">' + util.segundaParte() + '</span>')(scope);
                    var moreIndicatorSpan = $compile('<span ng-if="!collapsed">...</span>')(scope);
                    var toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "less" : "more"}}</span>')(scope);

                    element.empty();
                    element.append(firstSpan);
                    element.append(secondSpan);
                    element.append(moreIndicatorSpan);
                    element.append(toggleButton);
                }
            });
        }
    }
}]);