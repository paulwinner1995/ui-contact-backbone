define(function (require) {
    'use strict';

    const BaseView = require('scripts/base/base.view'),
        $ = require('jquery'),
        $dialog = require('jquery-ui'),
        _ = require('lodash');

    return BaseView.extend({

        defaultOptions: {
            autoOpen: true,

            modal: false
        },

        initialize: function (options) {
            BaseView.prototype.initialize.apply(this, arguments);

            options = options || {};

            let self = this;

            let buttons = {
                'submit': function() {
                    // call submit function with view context and $dialog - as param
                    self.submit.call(self, $(this));
                },
                'cancel': function() {
                    // call cancel function with view context and $dialog - as param
                    self.cancel.call(self, $(this));
                }
            };

            this.options = _.defaults(options, this.defaultOptions, {buttons: buttons});
        },

        openDialog: function () {
            $(this.render().el).dialog(this.options);
        },

        submit: function () {},

        cancel: function ($dialog) {
            $dialog.dialog('close');
        }
    });
});
