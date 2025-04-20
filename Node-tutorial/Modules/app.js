// we use 'require' keyword to import into a variable 
const logger = require('./logger.js') 

logger.log('tree');  //if we export multiple things as an object, we need to reference by the function name
logger('tree')  //if we export just a single item, we dont need to use an object


