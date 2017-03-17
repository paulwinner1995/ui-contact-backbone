define(function (require) {
   var dust = require('dust');

   // TODO: improve performance with dust.cache

   return {
      renderTemplate: function (templateSrc, data) {
         var html = '';

         dust.renderSource(templateSrc, data, function (err, output) {
            if (err) throw err;

            html = output;
         });

         return html;
      }
   }
});
