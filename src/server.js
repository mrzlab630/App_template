/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 17.01.2020
 * Time: 10:58
 * About:
 *
 */
import 'dotenv/config';

import http from 'http';
import express from 'express';

import path from 'path';
import fs from 'fs';
import  * as rfs from 'rotating-file-stream';

import compression from "compression";
import morgan from 'morgan';
import cors from 'cors';

import graphqlHTTP from 'express-graphql';
import {appSchema} from './schema';

import {ssr} from './routing/server';

import {getLocalExternalIP,openInBrowser} from './utilities';
import {port} from '../config';



const logDirectory = path.join(__dirname, 'logs');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const generator = () => {

    const pad = num => (num > 9 ? "" : "0") + num;

    const time = new Date();

    const index = parseInt(Math.random() * 100000);

    const month = time.getFullYear() + "" + pad(time.getMonth() + 1);
    const day = pad(time.getDate());
    const hour = pad(time.getHours());
    const minute = pad(time.getMinutes());

    return `${month}/${month}${day}-access.log`;
};

const accessLogStream = rfs.createStream(generator,{
    interval: '1d', // rotate daily
    path: logDirectory
});


const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};


function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
}


const app = express();

const server = http.createServer(app);


app.use(compression({
    level: 9, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress // set predicate to determine whether to compress
}));

app.use(morgan('combined',{stream:accessLogStream}));


app.use('/public', express.static(path.resolve(__dirname,'public')));

app.use('/client', express.static(path.resolve(__dirname,'client')));


app.use(
    "/graphql",
    cors(corsOptions),
    graphqlHTTP({schema:appSchema,
                        graphiql: true})
);

app.get("/*", ssr);

const servPortDetect = port || 4000;
const myIp = getLocalExternalIP();

const consoleComandOpen = process.argv.filter(itm => itm === '--open');

server.listen(servPortDetect, function listenHandler(err) {

    if(err){
        return console.error(err);
    }

    console.info(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
->        🚀 Server is start        
->                    You can open:
->                    local machine 💻: http://localhost:${servPortDetect} | lan 🌐: http://${myIp}:${servPortDetect}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);

    if(consoleComandOpen.length > 0){
        openInBrowser(`http://localhost:${servPortDetect}`, null,err => console.error(err));
    }
});