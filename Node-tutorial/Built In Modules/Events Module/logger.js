const EventEmitter = require('events');  // This returns us a CLASS which is why we are using this PascalCase capitalization for the name

var url = 'http://mylogger.io/log' //not a real url

class Logger extends EventEmitter{
    log(message) {  //a function defined inside a class does not need the 'function' keyword and instead is a method
        // send HTTP request
        console.log(message)
    
        // raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); //we can use this.emit since this class has all the properties of EventEmitter
    }
}




module.exports = Logger; //exporting the Logger Class