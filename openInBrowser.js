const os = require('os');
const exec = require('child_process').exec;
const config = require('./config');



function open(url,brw) {

            try{

                const platform = os.platform();
                const release = os.release();
                let osName;
                let command;

                switch (platform || undefined) {

                    case 'aix':
                        osName = 'aix';
                        break;

                    case 'darwin':

                        if(brw){
                            command = 'open -a ' + brw;
                        }else{
                            command = 'open';
                        }

                        osName = 'macOS';
                        break;

                    case 'sunos':
                    case 'openbsd':
                    case 'freebsd':
                    case 'linux':
                        command = 'xdg-open';
                        osName = 'linux';
                        break;

                    case 'win32':
                        command = 'start';
                        osName = 'windows';
                        break;

                    default:
                        throw new Error(`Unsupported platform: ${platform}`);

                }



                return  exec(command + ' ' + url,function (err) {

                    try{
                        if(err){
                            throw new Error(err);
                        }
                    }catch (e) {
                        console.error(e);
                    }
                });


            }catch (e) {
                console.error(e);
            }

}



open('http://localhost:' + config.port,null);