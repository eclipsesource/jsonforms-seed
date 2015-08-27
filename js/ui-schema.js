'use strict';

var app = angular.module('jsonforms-seed');
app.service('UISchemaService', function() {

    this.uiSchema = {
        "type": "HorizontalLayout",
        "elements": [
            {
                "type": "Control",
                "scope": { "$ref": "#/properties/name" }
            },
            {
                "type": "Control",
                "scope": { "$ref": "#/properties/age" }
            },
            {
                "type": "Control",
                "scope": { "$ref": "#/properties/gender" }
            },
        ]
    };

});