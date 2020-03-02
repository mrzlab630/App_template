/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 06.02.2020
 * Time: 15:27
 * About:
 *
 */
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';


const output = (dir) => ({
                        path: path.resolve(__dirname, dir),
                        publicPath: "",
                        filename: isDev ? '[name].js' : '[name].[hash].js'
                    });



module.exports = output;