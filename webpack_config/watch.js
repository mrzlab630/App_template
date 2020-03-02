
const isDev = process.env.NODE_ENV === 'development';

const watch = () =>{
    if(!isDev){
        return {
            watch:false,
            watchOptions:false
        };
    }
    return {
        watch: true,
        watchOptions: {
            ignored: ['../dist/**', '../node_modules/**']
        }
    }
};


module.exports = watch;