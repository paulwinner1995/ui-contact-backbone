define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        ContactModel = require('scripts/model/contact.model');

    return Backbone.Collection.extend({
        model: ContactModel
    })
});