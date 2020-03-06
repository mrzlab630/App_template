const externals = require('./externals');

const {
    js,
    ts,
    reactJsxTsx,
    cssInStyle,
    scssInStyle,
    lessInStyle,
    ignoreStyle,
    imgs,
    svgToUrl,
    fonts,
    html,
    handlebars
            } = require('./loaders');
const plugins  = require('./plugins');
const entry = require('./entry');
const output = require('./output');
const target = require('./target');
const resolve = require('./resolve');
const mode = require('./mode');
const watch = require('./watch');
const appPort = require('../config');


const watchRes = watch();


const serverConfig = {
                        mode: mode.dev,
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
                                ignoreStyle,
                                handlebars
                            ]
                        },
                        plugins:plugins(false),
                        output: output("../dist"),
                        resolve:resolve,
                        watch:watchRes.watch,
                        watchOptions:watchRes.watchOptions
                    }

const clientConfig = {
    mode: mode.dev,
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
            html,
            handlebars
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins:plugins(true),
    output: output("../dist/client"),
    resolve:resolve
};

module.exports = [serverConfig, clientConfig]