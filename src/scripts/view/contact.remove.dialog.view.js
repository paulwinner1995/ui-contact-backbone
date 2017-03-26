define(function (require) {
    'use strict';

    const BaseView = require('scripts/base/base.view'),
        ContactModel = require('scripts/model/contact.model'),
        template = require('text!templates/contact.remove.dialog.template.dust');

    return BaseView.extend({
        template: template,

        model: ContactModel
    });
});