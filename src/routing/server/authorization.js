/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 27.12.2019
 * Time: 10:05
 * About:
 *
 */

"use strict";



const authorization = (req, res) =>{

    try {
        const aToken = process.env.ACCESSTOKEN;


        res.cookie('aToken', aToken, {secure:true, httpOnly: true })




    }catch (e) {
        console.log(e.message);
        return {error:e.message};
    }

};


export default authorization;