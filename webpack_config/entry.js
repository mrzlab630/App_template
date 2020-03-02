/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 06.02.2020
 * Time: 15:34
 * About:
 *
 */
const path = require('path');



const entry = {
    server:{
        index: ['@babel/polyfill',path.resolve(__dirname, '../src/server.js')]
    },
    client:{
        client: ['@babel/polyfill',path.resolve(__dirname, '../src/client.jsx')]
    },
    test:{
        test: ['@babel/polyfill',path.resolve(__dirname, '../src/tests/app.test.js')]
    }
}


module.exports = entry;