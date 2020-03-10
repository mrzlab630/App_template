/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 06.02.2020
 * Time: 16:04
 * About:
 *
 */


"use strict";

var _os = require("os");
var config = require("./config.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getLocalExternalIP = function getLocalExternalIP() {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(Object.values((0, _os.networkInterfaces)()))).filter(function (details) {
        return details.family === 'IPv4' && !details.internal;
    }).pop().address;
};

var ip = getLocalExternalIP();

console.log('You can open:\n local machine: http://localhost:'+config.port+' for devServer: http://localhost:'+config.devServerPort+
            '\n lan: http://'+ip+':'+config.port+' for devServer: http://'+ip+':'+config.devServerPort);