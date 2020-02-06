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
                    index: ['@babel/polyfill',path.resolve(__dirname, '../src/server.js')]
                };


module.exports = entry;