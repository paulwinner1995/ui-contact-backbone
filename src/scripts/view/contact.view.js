define(function (require) {
    'use strict';

    var BaseView = require('scripts/base/base.view');
    var template = require('text!templates/contact.template.dust');

    return BaseView.extend({
        template: template
    });
});
