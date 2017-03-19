define(function (require) {
    'use strict';

    var BaseView = require('scripts/base/base.view'),
        ContactCollection = require('scripts/collection/contact.collection'),
        template = require('text!templates/contact.collection.template.dust');

    return BaseView.extend({
        template: template,

        collection: ContactCollection
    });
});

