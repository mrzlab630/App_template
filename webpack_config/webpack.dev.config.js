const path = require('path');
const externals = require('./externals');

const {js,
        ts,
        reactJsxTsx,
        cssInStyle,
        scssInStyle,
        lessInStyle,
        imgs,
        svgToUrl,
        fonts} = require('./loaders');
const configApp  = require('../config');
const plugins  = require('./plugins');
const entry = require('./entry');
const output = require('./output');
const target = require('./target');


const serverConfig = {
    mode: 'development',
    devtool: 'source-map',
    target: target.backend,
    node: {
        __dirname: false
    },
    externals: externals,
    entry: entry,
    module: {
        rules: [
                js,
                ts,
                reactJsxTsx,
                cssInStyle,
                scssInStyle,
                lessInStyle,
                imgs,
                svgToUrl,
                fonts
                ]
    },
    resolve:{
            extensions:['.js','.css','.scss','.png','.svg','.jpg'],
        alias:{
            '@': path.resolve(__dirname, 'src'),
            '@utilities': path.resolve(__dirname, 'src/utilities'),
        }
    },
    devServer:{
        port:configApp.devServerPort,
        contentBase: path.resolve(__dirname, "../dist"),
        watchContentBase: true,
        hot: true,
        inline:true,
        open: true,
        proxy: {
            '/': {
                target: 'http://localhost:'+configApp.port,
                secure: false,

            }
        },
        overlay: {
            warnings: false,
            errors: false,
        },
    },
    plugins:plugins(),
    output: output
};




module.exports = [serverConfig];