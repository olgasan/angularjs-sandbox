app.directive('verMas', ['$compile', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, element, attrs) {
            scope.collapsed = false;

            scope.toggle = function() {
                scope.collapsed = !scope.collapsed;
            };

            attrs.$observe('verMas', function(maxLength) {
                var text = element.text();

                if (text.length > maxLength) {
                    // split the text in two parts, the first always showing
                    var firstPart = String(text).substring(0, maxLength);
                    var secondPart = String(text).substring(maxLength, text.length);

                    // create some new html elements to hold the separate info
                    var firstSpan = $compile('<span>' + firstPart + '</span>')(scope);
                    var secondSpan = $compile('<span ng-if="collapsed">' + secondPart + '</span>')(scope);
                    var moreIndicatorSpan = $compile('<span ng-if="!collapsed">...</span>')(scope);
                    var toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "less" : "more"}}</span>')(scope);

                    // remove the current contents of the element
                    // and add the new ones we created
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
/*app.directive('verMas', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<div><p>{{content}}</p><p><a class="btn btn-default" href="#">Ver mas</a></p></div>',
        link: function(scope, elem, attrs) {
            var textContent = elem.text ();
            scope.content = textContent.toString();

            var c = textContent.substr (0, 20);
            console.log((textContent));
        }
    };
});*/

/*app.directive('showMore',
    function(){
        return {
            templateUrl: 'templates/showMore.html',
            restrict: 'A',
            transclude: true,
            scope:{
                'showMoreHeight': '@'
            },
            controller: ['$scope', '$element', '$interval', function($scope, $element, $interval) {

                $scope.expanded = false;

                $interval(function(){
                    renderStyles();
                }, 300);

                $scope.expandable = false;
                function renderStyles(){
                    if($element.height() >= $scope.showMoreHeight && $scope.expanded === false){
                        $scope.expandable = true;
                    }
                }

                $scope.showLessStyle = {
                    'max-height': $scope.showMoreHeight + 'px',
                    'overflow': 'hidden'
                };

            }]
        };
    });*/