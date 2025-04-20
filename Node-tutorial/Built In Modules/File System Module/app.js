const fs = require('fs')

// const files = fs.readdirSync('../') // files will be an array of strings

// console.log(files)

fs.readdir('./', function(err, files) {  // we almost always want to use the async functions instead of sync
    if (err) {
        console.log(err)
    }
    else {
        console.log(files)
    }
})