'use strict';

var app = angular.module('jsonforms-seed', ['jsonForms']);
app.controller('MyController', ['$scope', function($scope) {

    $scope.schema = {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "age": {
                "type": "integer"
            },
            "gender": {
                "type": "string",
                "enum": ["Male", "Female"]
            },
            "height": {
                "type": "number"
            }
        }
    };

    $scope.data = {
        "name": 'John Doe',
        "age": 36,
        "height": 1.85,
        "gender": 'Male'
    };

    // TODO: define UI schema
}]);