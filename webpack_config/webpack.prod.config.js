const externals = require('./externals');
const {js,
    ts,
    reactJsxTsx,
    cssInStyle,
    scssInStyle,
    lessInStyle,
    ignoreStyle,
    imgs,
    svgToUrl,
    fonts,
    html} = require('./loaders');
const plugins  = require('./plugins');
const entry = require('./entry');
const output = require('./output');
const target = require('./target');
const resolve = require('./resolve');
const mode = require('./mode');



const serverConfig = {
    mode: mode.prod,
    target: target.backend,
    externals: externals,
    node: {
        __dirname: false
    },
    entry: entry.server,
    module: {
        rules: [
            js,
            ts,
            reactJsxTsx,
            ignoreStyle
        ]
    },
    plugins:plugins(false),
    output: output("../dist"),
    resolve:resolve,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
}

const clientConfig = {
    mode: mode.prod,
    target: target.frontend,
    entry: entry.client,
    module: {
        rules:  [
            js,
            ts,
            reactJsxTsx,
            cssInStyle,
            scssInStyle,
            lessInStyle,
            imgs,
            svgToUrl,
            fonts,
            html
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins:plugins(true),
    output: output("../dist/public"),
    resolve:resolve
};

module.exports = [serverConfig, clientConfig];