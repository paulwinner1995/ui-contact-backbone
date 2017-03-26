define(function (require) {
    'use strict';

    const Backbone = require('backbone'),
        ContactModel = require('scripts/model/contact.model');

    return Backbone.Collection.extend({
        model: ContactModel
    })
});