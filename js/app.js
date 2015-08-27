'use strict';

var app = angular.module('jsonforms-seed', ['jsonForms']);
app.controller('MyController', ['$scope', 'SchemaService', 'UISchemaService', function($scope, SchemaService, UISchemaService) {

    $scope.schema = SchemaService.schema;

    $scope.uiSchema = UISchemaService.uiSchema; 

    $scope.data = {
        "name": 'John Doe',
        "age": 36,
        "height": 1.85,
        "gender": 'Male'
    };
}]);