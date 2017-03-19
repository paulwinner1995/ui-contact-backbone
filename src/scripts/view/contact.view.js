define(function (require) {
    'use strict';

    var BaseView = require('scripts/base/base.view'),
        ContactModel = require('scripts/model/contact.model'),
        template = require('text!templates/contact.template.dust');

    return BaseView.extend({
        template: template,

        model: ContactModel
    });
});
