define(function (require) {
    'use strict';

    var BaseView = require('scripts/base/base.view'),
        ContactModel = require('scripts/model/contact.model'),
        ContactRemoveDialogView = require('scripts/view/contact.remove.dialog.view'),
        $ = require('jquery'),
        $dialog = require('jquery-ui'),
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
            let removeDialog = new ContactRemoveDialogView({model: self.model});

            this._addChildView(removeDialog);
        },

        openRemoveDialog: function () {
            $(this._childViews[0].render().el).dialog();
        }
    });
});
