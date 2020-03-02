const path = require('path');

const resolve = {
    extensions:['.js','.jsx','.ts','.tsx','.css','.scss','.png','.svg','.jpg'],
    alias:{
        '@': path.resolve(__dirname, 'src'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
    }
}


module.exports = resolve;