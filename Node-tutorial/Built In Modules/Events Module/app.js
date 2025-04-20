const EventEmitter = require('events');  // This returns us a CLASS which is why we are using this capitalization for the name

const Logger = require('./logger'); //Logger is a CLASS
const logger = new Logger() //instance of this new class


// register a listener
logger.on('messageLogged', function(arg) {  // e, eventArg
    console.log('Listener Called', arg);
});  //this is basically the exact same as emitter.addListener

logger.log('message')



