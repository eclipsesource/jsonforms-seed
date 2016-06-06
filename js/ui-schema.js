'use strict';

var app = angular.module('jsonforms-seed');
app.value('UISchema',
    {
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
    }
);
