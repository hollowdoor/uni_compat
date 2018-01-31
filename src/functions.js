import { IN_BROWSER } from './constants.js';

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
    return (IN_BROWSER && (/(^\?|&)DEBUG=(1|true)/.test(window.location.search + ''))) || !!process.env['DEBUG'] && process.env['DEBUG'] === 1 || process.env['DEBUG'] === 'true';
}

export { TERM_SUPPORTS_COLOR };
