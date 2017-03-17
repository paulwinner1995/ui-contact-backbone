define(function (require) {
   var $ = require('jquery');
   var ContactView = require('scripts/view/contact.view');

   new ContactView({el: $('#page-content')}).render();
});
