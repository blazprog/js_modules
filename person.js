var Backbone = require('backbone');

Person = Backbone.Model.extend({
    defaults: {
        name: 'Blaz Korosec',
    },
});

module.exports = Person;
