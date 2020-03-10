const path = require('path');
const fs = require('fs');


try {
    const Directory = path.join(__dirname, 'dist',);

    fs.existsSync(Directory) || fs.mkdirSync(Directory);

    fs.writeFile('./dist/index.js', ' ',function (err) {
        if (err) throw err;
        console.log('########  File is created successfully. ######## ');
    });

} catch (err) {
    console.error('######## create index file: ERROR ########', err.message)
}