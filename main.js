var pozdrav = require('./hello');
var Person = require('./person')
var PersonView = require('./person_view')

pozdrav.sayHello('Blaz');
blaz = new Person();
console.log(blaz.get('name'));
person_view = new PersonView({el: 'div#header'})
console.log(person_view.el);
person_view.render();

