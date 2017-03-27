define(function (require) {
    'use strict';

    var BaseView = require('scripts/base/base.view'),
        ContactModel = require('scripts/model/contact.model'),
        ContactRemoveModalView = require('scripts/view/contact.remove.modal.view'),
        template = require('text!templates/contact.template.dust');

    return BaseView.extend({
        template: template,

        model: ContactModel,

        events: {
            'click ._btn-remove': 'openRemoveDialog'
        },

        initialize: function () {
            BaseView.prototype.initialize.apply(this, arguments);

            let self = this;

            let removeDialog = new ContactRemoveModalView({
                model: self.model,
                modal: true
            });

            this._addChildView(removeDialog);
        },

        openRemoveDialog: function () {
            this._childViews[0].openDialog();
        }
    });
});
