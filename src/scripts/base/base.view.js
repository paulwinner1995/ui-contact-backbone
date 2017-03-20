define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Renderer = require('scripts/util/dust.renderer'),
        _ = require('lodash');

    return Backbone.View.extend({

        initialize: function() {
            Backbone.View.prototype.initialize.apply(this, arguments);
            this._childViews = [];
        },

        render: function () {
            var html = Renderer.renderTemplate(this.template, this.renderModel());

            this.$el.html(html);

            this._renderChildViews();

            return this;
        },

        renderModel: function () {
            var modelData = this.model || this.collection;

            return modelData && _.isFunction(modelData.toJSON) ? modelData.toJSON() : modelData;
        },

        remove: function () {
            this._clearChildViews();
            Backbone.View.prototype.remove.apply(this, arguments);
        },
        
        _addChildView: function (view) {
            this._childViews.push(view);
        },

        _renderChildViews: function () {
            var self = this;
            _.forEach(this._childViews, function (view) {
                self.$el.append(view.render().el);
            })
        },

        _clearChildViews: function () {
            _.forEach(this._childViews, function (view) {
                view.remove();
            });
            this._childViews = [];
        }
    });
});