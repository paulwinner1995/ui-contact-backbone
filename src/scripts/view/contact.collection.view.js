define(function (require) {
    'use strict';

    const BaseView = require('scripts/base/base.view'),
        ContactView = require('scripts/view/contact.view'),
        ContactCollection = require('scripts/collection/contact.collection'),
        _ = require('lodash'),
        template = require('text!templates/contact.collection.template.dust');

    return BaseView.extend({
        template: template,

        collection: ContactCollection,

        initialize: function () {
            BaseView.prototype.initialize.apply(this, arguments);

            let self = this;

            this.collection.each((model) => self._addChildView(new ContactView({model: model})));
        },

        render: function () {
            BaseView.prototype.render.apply(this);

            this._renderChildViews();

            return this;
        },

        _renderChildViews: function () {
            let self = this;

            _.forEach(this._childViews, (view) => self.$el.append(view.render().el));
        }
    });
});

