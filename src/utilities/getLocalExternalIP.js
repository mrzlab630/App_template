/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 06.02.2020
 * Time: 16:20
 * About: get Local External IP
 *
 */


import { networkInterfaces } from 'os'

const getLocalExternalIP = () => [].concat(...Object.values(networkInterfaces()))
    .filter(details => details.family === 'IPv4' && !details.internal)
    .pop().address;


export default getLocalExternalIP;