/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 05.02.2020
 * Time: 16:22
 * About:
 *
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';




const styleloadersInFile = ext =>{

    let defLoaders = [{
        loader:MiniCssExtractPlugin.loader,
        options:{
            hmr:isDev,
            reloadAll:true
        }
    },'css-loader'];

    if(ext){
        defLoaders.push(ext);
    }

    return defLoaders

};

const babelUseOptions = preset =>{

    const options = {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }
            };

    if(preset){
        options.options.presets.push(preset);
    }

        return !isDev ? options : [options,'eslint-loader'];
};



const cssInStyle = {
    test: /\.css$/,
    use:['style-loader','css-loader']
};

const cssInFile = {
    test: /\.css$/,
    use:styleloadersInFile()
};

const lessInFile = {
    test: /\.less$/,
    use:styleloadersInFile('less-loader')
};

const lessInStyle = {
    test: /\.less$/,
    use:['style-loader','css-loader','less-loader']
};

const scssInFile = {
    test: /\.s[ac]ss$/,
    use:styleloadersInFile('sass-loader')
};

const scssInStyle = {
    test: /\.s[ac]ss$/,
    use:['style-loader','css-loader','sass-loader']
};

const ignoreStyle =  {
    test: /\.(css|scss|less)$/,
    loader: "ignore-loader"
};

const js = {
    test: /\.js$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    use:babelUseOptions()
};

const ts = {
    test: /\.ts$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    use: babelUseOptions('@babel/preset-typescript')
};

const reactJsxTsx = {
    test: /\.(jsx|tsx)$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    use: babelUseOptions('@babel/preset-react')
};

const imgs = {
    test: /\.(png|jpe?g|gif)$/,
    use:['file-loader']
};

const svgToUrl = {
    test: /\.svg$/,
    use:[{
        loader: 'svg-url-loader',
        options: {
            limit: 10 * 1024,
            noquotes: true,
        }
    }]
};

const fonts = {
    test: /\.(ttf|woff|woff2|eot)$/,
    use:[{
    loader: "file-loader",
        options:{name: `src/assets/fonts/[name].[ext]`}
        }]
};

const html = {
    test: /\.html$/,
    use:[{
        loader: "html-loader",

    }]
};

const handlebars = {
    test: /\.(hbs|handlebars)$/,
    use:[{
        loader: "handlebars-loader",
    }]
};



module.exports =  {
                        js,
                        ts,
                        reactJsxTsx,
                        cssInStyle,
                        cssInFile,
                        scssInFile,
                        scssInStyle,
                        lessInFile,
                        lessInStyle,
                        ignoreStyle,
                        imgs,
                        svgToUrl,
                        fonts,
                        html,
                        handlebars
                    };