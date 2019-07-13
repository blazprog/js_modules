hello = {
    sayHello: function(name){
        name = name || 'world';
        console.log('hello', name);
    }
}

module.exports = hello;
