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

    $scope.uiSchema = {
     "elements": [
       {
         type: "HorizontalLayout",
         elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Control",
                  label: "Name",
                  scope: {
                    $ref: "#/properties/name"
                  }
                },
                {
                  type: "Control",
                  label: "Age",
                  scope: {
                    $ref: "#/properties/age"
                  }
                }
              ]
            },
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Control",
                  label: "Height",
                  scope: {
                    $ref: "#/properties/height"
                  }
                },
                {
                  type: "Control",
                  label: "Gender",
                  scope: {
                    $ref: "#/properties/gender"
                  }
                }
              ]
            }
         ]
       }
     ]
   };
}]);