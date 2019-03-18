'use strict';
var app, app_name;

app_name = "coffeeApp";

angular.module(app_name, [
  app_name + '.services',
  app_name + '.directives'
])


angular.module(app_name + '.services', []).
  value('version', '0.1');


angular.module(app_name + ".directives", [])

.directive('appVersion', ['version', function(version) {
    return function(scope, element, attrs) {
      return element.text(version);
    };
  }
])

.directive('hello', function() {
  return {
    restrict: 'E',
    template: '<div>Hello World</div>'
  };
});
