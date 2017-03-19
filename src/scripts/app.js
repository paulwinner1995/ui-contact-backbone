define(function (require) {
    var ContactView = require('scripts/view/contact.view');
    var Backbone = require('backbone');
    var $ = require('jquery');

    var Contact = Backbone.Model.extend({});
    var testContact = new Contact({
        name: 'Paul Winner',
        phone: '0-95-86-99-152',
        group: 'Family',
        sex: 'male'
    });

    new ContactView({el: $('#page-content'), model: testContact}).render();
});
