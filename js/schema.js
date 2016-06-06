'use strict';

var app = angular.module('jsonforms-seed');
app.value('Schema',
    {
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
);
