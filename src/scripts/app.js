define(function (require) {
    var ContactCollection = require('scripts/collection/contact.collection'),
        ContactCollectionView = require('scripts/view/contact.collection.view'),
        $ = require('jquery');

    var contacts = [{
        name: 'Paul Winner',
        phone: '0-95-86-99-152',
        group: 'Family',
        sex: 'male'
    }, {
        name: 'Nazar Taran',
        phone: '0-95-86-99-152',
        group: 'Friends',
        sex: 'male'
    }, {
        name: 'Slava Belimenko',
        phone: '0-95-86-99-152',
        group: 'Friends',
        sex: 'male'
    }, {
        name: 'Nataly Minakova',
        phone: '0-95-86-99-152',
        group: 'Friends',
        sex: 'female'
    }, {
        name: 'Michail Litovka',
        phone: '0-95-86-99-152',
        group: 'Friends',
        sex: 'male'
    }, {
        name: 'Rustam Mamedow',
        phone: '0-95-86-99-152',
        group: 'Friends',
        sex: 'male'
    }];

    var contactList = new ContactCollection(contacts);

    new ContactCollectionView({el: $('#page-content'), collection: contactList}).render();
});
