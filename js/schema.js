'use strict';

var app = angular.module('jsonforms-seed');
app.factory('SchemaService', function() {
    return {
        schema: {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "minLength": 3
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
        }
    }
});