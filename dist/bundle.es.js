//Except for IN_BROWSER constants should be side effect free for transpiler tree shaking
var IN_BROWSER = new Function("try {return this===window;}catch(e){ return false;}")();
var IN_NODE = !IN_BROWSER && typeof module !== 'undefined';
var SUPPORTS_UTF8 = IN_BROWSER || (process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color');

var uni = IN_BROWSER && window || global;

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
    return (IN_BROWSER && (/(^\?|&)DEBUG=(1|true)/.test(window.location.search + ''))) || !!process.env['DEBUG'] && process.env['DEBUG'] === 1 || process.env['DEBUG'] === 'true';
}

export { IN_BROWSER, IN_NODE, SUPPORTS_UTF8, uni, supportsColor, debugging, TERM_SUPPORTS_COLOR };
//# sourceMappingURL=bundle.es.js.map
