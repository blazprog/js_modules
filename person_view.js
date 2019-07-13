var Backbone = require('backbone');
var person_template = require('./person.tpl');

PersonView = Backbone.View.extend({
    initialize: function() {
        this.template = person_template;
        console.log('In person view');
        console.log(person_template);
        console.log(person_template());
        this.render();
    },
    render: function() {
        this.$el.html(person_template());
        return this;
    }
});

module.exports = PersonView;
