//Not sure if these will be used
import { IN_BROWSER } from './constants.js';
const TERM_SUPPORTS_COLOR = (()=>{
    if(IN_BROWSER) return false;
    const supports = require('supports-color');
    return supports.stdout.hasBasic;
})();

const DEBUG = (IN_BROWSER && (/(^\?|&)DEBUG=(1|true)/.test(window.location.search + ''))) || !!process.env['DEBUG'] && process.env['DEBUG'] === 1 || process.env['DEBUG'] === 'true';

export { TERM_SUPPORTS_COLOR };
