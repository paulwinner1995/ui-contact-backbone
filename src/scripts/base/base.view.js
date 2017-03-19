define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Renderer = require('scripts/util/dust.renderer'),
        _ = require('lodash');

    return Backbone.View.extend({

        render: function () {
            var html = Renderer.renderTemplate(this.template, this.renderModel());

            this.$el.html(html);

            return this;
        },

        renderModel: function () {
            var modelData = this.model || this.collection;

            return modelData && _.isFunction(modelData.toJSON) ? modelData.toJSON() : modelData;
        }
    });
});