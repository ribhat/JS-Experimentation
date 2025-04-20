var url = 'http://mylogger.io/log' //not a real url

function log(message) {
    // send HTTP request
    console.log(message)
}

module.exports.log = log;
module.exports.endpoint = url; 

//if we just want to export one item, we dont need to export it as an object
module.exports = log  //with this implementation, we dont need to unpack the object when we import it later. We can use the function directly