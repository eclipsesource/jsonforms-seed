'use strict';

var app = angular.module('jsonforms-seed', ['jsonforms']);
app.controller('MyController', ['$scope', 'Schema', 'UISchema', function($scope, Schema, UISchema) {

    $scope.schema = Schema;

    $scope.uiSchema = UISchema; 

    $scope.data = {
        "name": 'John Doe',
        "age": 36,
        "height": 1.85,
        "gender": 'Male'
    };
}]);
