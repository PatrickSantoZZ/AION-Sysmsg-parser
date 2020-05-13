const path = require('path');
const fs = require('fs');

fs.readFile('aionstrings.json', 'utf8', (err, jsonString ) => {
    if (err) {
        console.log("failed:", err)
        return
        }
        try {
            let aionstrings = JSON.parse(jsonString)
            for (var i = 0; i < aionstrings.length; ++i) {
            console.log('processing '+aionstrings[i].name+" "+aionstrings[i].id )
        fs.appendFileSync('strings.map', aionstrings[i].name+" "+aionstrings[i].id+'\n');
            }
    } catch(err) {
            console.log('parsing error:', err)
        }
    })