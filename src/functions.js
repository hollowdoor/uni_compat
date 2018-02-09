import { IN_BROWSER } from './constants.js';
import _supportsLogStyles from 'browser-supports-log-styles';

export function supportsLogStyles(){
    return IN_BROWSER && _supportsLogStyles();
}

export function supportsColor(){
    if(IN_BROWSER){
        return {
            browser: true
        };
    }
    const supports = require('supports-color');
    supports.browser = false;
    return supports;
}

export function debugging(){
    if(IN_BROWSER){
        return /(^\?|&)DEBUG=(1|true)/.test(window.location.search + '');
    }
    return !!process.env['DEBUG'] && process.env['DEBUG'] === 1 || process.env['DEBUG'] === 'true';
}
