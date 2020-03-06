/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 06.02.2020
 * Time: 15:05
 * About:
 *
 */

const webpack = require('webpack');
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const {GenerateSW,InjectManifest} = require('workbox-webpack-plugin');



const isDev = process.env.NODE_ENV === 'development';



const plugins = (isBrowser) =>{


    let plugNodeOrWeb = isBrowser
        ? []
        : [
                new CopyWebpackPlugin([
                    {
                        from: path.resolve(__dirname, '../src/public'),
                        to: path.resolve(__dirname, '../dist/public')
                    }
                ])

            ];


    const general = [
        new CleanWebpackPlugin({verbose: true,}),
        new HTMLWebpackPlugin({
            title: 'Template',
            template:path.resolve(__dirname, '../src/assets/theme/index.hbs'),
            favicon:path.resolve(__dirname, '../src/assets/ico/favicon.ico'),
            minify: !isDev && {
                                html5: true,
                                collapseWhitespace: true,
                                caseSensitive: true,
                                removeComments: true,
                                removeEmptyElements: true
                            },

        }),
        new webpack.DefinePlugin({
            __isBrowser__: JSON.stringify(isBrowser),
        }),

        new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /en|ru/
        )
    ];

    let allPlug = general.concat(plugNodeOrWeb);

    const prod = [
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin({
            hashFunction:"md4",
            hashDigest:"base64",
            hashDigestLength:4
        }),

        new ManifestPlugin({
            chunk:true
        }),

/*
        new InjectManifest({
            swSrc: path.resolve(__dirname, '../src/public/assets/manifest.js'),
            swDest: "manifest.js"
        }),
*/

        new GenerateSW({
            cacheId: 'pwa',
            clientsClaim: true,
            skipWaiting: true,
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],
            runtimeCaching: [{
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 10,
                    },
                },
            }],
        }),
    ];

    const dev = [];



    if(isDev){

        if(Array.isArray(dev) && dev.length > 0){
            return allPlug.concat(dev);
        }
        return allPlug;
    }


    if(Array.isArray(prod) && prod.length > 0){
        return allPlug.concat(prod);
    }

    return allPlug;

};




module.exports = plugins;