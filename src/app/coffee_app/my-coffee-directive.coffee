'use strict'
app_name = "coffeeApp"
app = angular.module "#{app_name}.directives", []

# Directive to include the version number of my project
app.directive 'appVersion', [
'version', (version) ->
    (scope, element, attrs) ->
    element.text version
]

# Hello world directive
app.directive 'hello', () ->
    restrict: 'E'
    template: '<div>Hello World</div>'
