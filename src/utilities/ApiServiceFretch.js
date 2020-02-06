import fetch from 'node-fetch';



export default class ApiServiceFretch {

    async getResurce(url,method = 'POST',action = false,body = false){
        try {
            const nocache = new Date().getTime();
            const res = await fetch(url, {
                method: method,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Cache-Control': 'no-cache',
                   // 'Content-Encoding': 'gzip, deflate',
                },
                body: method === 'POST' ? `action=${action}&json=${JSON.stringify(body)}&nocache=${nocache}` : null

            });

            const errInfo = await res.text() || false;

            if (!res.ok) {

                console.error(res);

                const {error:{message:errorMessage}} = JSON.parse(errInfo) || `Could not fetch`;
                throw new Error(`💩 Oops! ${errorMessage}`)

            }
            return errInfo;

        }catch (error) {

            return {
                    id:parseInt(new Date().getTime()/1000),
                    type:'error',
                    name:error.name,
                    message:error.message
                    };
        }

    }
    getData(pageUrl){
        return this.getResurce(pageUrl,`GET`);
    }


    postData(pageUrl,data){
        return this.getResurce(pageUrl,`POST`,action,data);
    }

}
