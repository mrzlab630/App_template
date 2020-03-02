/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 22.11.2019
 * Time: 10:09
 * About: render React js
 *
 */

import express from "express";
import { Provider } from 'react-redux';
import App from "../../components/App";
import React from "react";
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from "react-dom/server";
import {createStore} from '../../store/';
import {getPagesFromAPI,toggleLanguage} from '../../store/actions';

import serialize from 'serialize-javascript';
import hbs from "handlebars";
import {authorization} from "./index";




const router = express.Router();
const helmet = Helmet.renderStatic();


router.use("/*", async (req, res) => {


    const {headers:reqHeaders,params:reqParams,url:reqUrl} = req || false;


    const osLang = reqHeaders && "accept-language" in reqHeaders ? reqHeaders["accept-language"] : false;
    let lang = osLang && osLang.indexOf('ru-RU') + 1 ? 'ru' : 'en';


    let fonts = '';

    authorization(req, res); //set cookie

    let params = reqParams && Array.isArray(reqParams) && reqParams.length > 0 ? reqParams[0].split('/')[0]  : 'home';


  const store = createStore;

  const {style:{darkMode}} = store.getState() || false;


  const context = {};

    await toggleLanguage(lang)(store.dispatch);
    await getPagesFromAPI(params.toLowerCase())(store.dispatch);


    const theHtml = `<!doctype html>
<html lang="${lang}" xmlns:og="http://ogp.me/ns#">
  <head>
      <meta charset="utf-8">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="theme-color">
            <base href="${typeof document !== 'undefined' && document.location ||  store.getState().domain}" />
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon">
    <link rel="manifest" href="/public/manifest.json">   
  <!--  <link rel="preload" href="/public/styles.css" as="style" /> -->
    <link rel="stylesheet" href="/public/styles.css">
        ${fonts}
  </head>
  <body class="${darkMode ? 'dark-mode' : 'day-mode'}">
  <div id="reactele">{{{reactele}}}</div>
  <script>
    window.__INITIAL_STATE_DATA__ = ${serialize(store.getState()).replace(
        /</g,
        '\\u003c'
    )}       
      </script>
    <script src="public/vendors~client.js" type="text/javascript"></script>
    <script src="public/client.js" type="text/javascript"></script>

    
    <script>
                     // Если браузер поддерживает service-worker - регистрируем
                     if ('serviceWorker' in navigator) {
                       window.addEventListener('load', () => {
                         navigator.serviceWorker.register('/public/service-worker.js')
                           .then(registration => {
                             console.log('Service Worker is registered! ');
                           })
                           .catch(err => {
                             console.log('Registration failed  ', err);
                           });
                       });
                     }
    </script>
                     
  </body>
  </html>
  `;



  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end()
  } else {


    const hbsTemplate = hbs.compile(theHtml);

    const reactComp = renderToString(
        <Provider store={store} >
            <StaticRouter location={reqUrl || '/'} context={context}>
        <App />
        </StaticRouter>
        </Provider>);

    const htmlToSend = hbsTemplate({ reactele: reactComp });

    res.send(htmlToSend);

  }


});

export default router;