const externals = require('./externals');
const {js,
        ts,
        reactJsxTsx,
        cssInFile,
        scssInFile,
        lessInFile,
        imgs,
        svgToUrl,
        fonts} = require('./loaders');
const plugins  = require('./plugins');
const entry = require('./entry');
const output = require('./output');
const target = require('./target');



const serverConfig = {
    mode: 'production',
    target: target.backend,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
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
            cssInFile,
            scssInFile,
            lessInFile,
            imgs,
            svgToUrl,
            fonts
        ]
    },
     optimization:{
         splitChunks:{
             chunks:'all'
        }
    },
    plugins:plugins(),
    output: output
};




module.exports = [serverConfig];