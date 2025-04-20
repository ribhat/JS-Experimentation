const os = require('os')

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory)
console.log(`Free Memory: ${freeMemory}`)  //use back ticks ` and $ for dynamic text without concatenation
