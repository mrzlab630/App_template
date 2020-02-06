const fs = require('fs-extra');

try {

    fs.copySync('src/public/', 'dist/static/');


    console.log('######## static assets copy: OK ########')
} catch (err) {
    console.error('######## static assets copy: ERROR ########', err.message)
}