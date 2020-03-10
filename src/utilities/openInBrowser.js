const os = require('os');
const exec = require('child_process').exec;

function openInBrowser(url,brw,callback) {

    try {

        const platform = os.platform();
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


        return  exec(command + ' ' + url,function (err,callback) {

            try{
                if(err){
                    throw new Error(err);
                }
            }catch (e) {
                callback({error:e.message});
            }
        });

    }catch (e) {
        callback({error:e.message});
    }

}


export default openInBrowser;