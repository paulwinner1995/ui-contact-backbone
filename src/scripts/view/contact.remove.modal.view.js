define(function (require) {
    'use strict';

    const BaseModalView = require('scripts/base/base.modal.view'),
        ContactModel = require('scripts/model/contact.model'),
        template = require('text!templates/contact.remove.modal.template.dust');

    return BaseModalView.extend({
        template: template,

        model: ContactModel,

        submit: function ($dialog) {
            // TODO: Should implement destroy logic
        }
    });
});