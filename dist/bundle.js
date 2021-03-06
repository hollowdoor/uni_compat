'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _supportsLogStyles = _interopDefault(require('browser-supports-log-styles'));

//Except for IN_BROWSER constants should be side effect free for transpiler tree shaking
var IN_BROWSER = new Function("try {return this===window;}catch(e){ return false;}")();
var IN_NODE = !IN_BROWSER && typeof module !== 'undefined';
var SUPPORTS_UTF8 = IN_BROWSER || (process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color');

var uni = IN_BROWSER && window || global;

function supportsLogStyles(){
    return IN_BROWSER && _supportsLogStyles();
}

function supportsColor(){
    if(IN_BROWSER){
        return {
            browser: true
        };
    }
    var supports = require('supports-color');
    supports.browser = false;
    return supports;
}

function debugging(){
    if(IN_BROWSER){
        return /(^\?|&)DEBUG=(1|true)/.test(window.location.search + '');
    }
    return !!process.env['DEBUG'] && process.env['DEBUG'] === 1 || process.env['DEBUG'] === 'true';
}

exports.IN_BROWSER = IN_BROWSER;
exports.IN_NODE = IN_NODE;
exports.SUPPORTS_UTF8 = SUPPORTS_UTF8;
exports.uni = uni;
exports.supportsLogStyles = supportsLogStyles;
exports.supportsColor = supportsColor;
exports.debugging = debugging;
//# sourceMappingURL=bundle.js.map
