const csvToJson = require('csvtojson');
const fs = require('fs')

csvToJson().fromFile('TATASTEEL.NS.csv').then(jsonObj => {
    // Print the JSON object to the console
    console.log(jsonObj);

    fs.writeFileSync("TATASTEEL.json",JSON.stringify(jsonObj))
});
