'use strict';

var app = angular.module('jsonforms-seed', []);
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
      			"enum": [ "Male", "Female" ]
    		},
    		"birthDate" {
      			"type": "date"
    		}
  		}
  	};

	$scope.data = {
    	name:   'John Doe',
     	age:    36,
     	height: 1.85
     	gender: 'Male',
   	};

	$scope.formattedData = function() {
		return JSON.stringify(data);
	};

    // TODO: define UI schema
}]);