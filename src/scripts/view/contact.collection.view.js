define(function (require) {
    'use strict';

    var BaseView = require('scripts/base/base.view'),
        ContactView = require('scripts/view/contact.view'),
        ContactCollection = require('scripts/collection/contact.collection'),
        template = require('text!templates/contact.collection.template.dust');

    return BaseView.extend({
        template: template,

        collection: ContactCollection,

        initialize: function () {
            BaseView.prototype.initialize.apply(this, arguments);

            var self = this;

            this.collection.each(function (model) {
                self._addChildView(new ContactView({model: model}));
            });
        }
    });
});

