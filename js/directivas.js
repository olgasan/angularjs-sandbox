app.directive('verMas', ['$compile', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        scope: {},
        link: function(scope, element, attrs) {
            scope.collapsed = false;

            scope.toggle = function() {
                scope.collapsed = !scope.collapsed;
            };

            attrs.$observe('verMas', function(longitud) {
                var util = utils.verMas;
                util.texto = element.text();
                util.longitudResumen = longitud;

                if (util.debeMostrarVerMas()) {
                    var primeraParte = $compile('<span ng-if="!collapsed">' + util.primeraParte() + '</span>')(scope);
                    var segundaParte = $compile('<span ng-if="collapsed">' + element.html() + '</span>')(scope);
                    var indicadorMas = $compile('<span ng-if="!collapsed">...</span>')(scope);
                    var botonMas = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "Ver menos" : "Ver m&aacute;s"}}</span>')(scope);

                    element.empty();
                    element.append(primeraParte);
                    element.append(segundaParte);
                    element.append(indicadorMas);
                    element.append(botonMas);
                }
            });
        }
    }
}]);