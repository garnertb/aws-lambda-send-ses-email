"use strict";

var config = {
    "templateBucket" : "prominent-edge-email",
    "templateKey" : "Templates/Template.html",
    "targetAddress" : "contact@prominentedge.com",
    "fromAddress": "noreply@prominentedge.com",
    "defaultSubject" : "Contact request from: {{name}}"
};

module.exports = config;
