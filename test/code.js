(function () {
'use strict';

var browserSupportsLogStyles_1$1 = browserSupportsLogStyles;

function browserSupportsLogStyles () {
  // don’t run in non-browser environments
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false
  }

  // edge browser? https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
  var isEdge = navigator.userAgent.toLowerCase().indexOf('edge') > -1;
  // http://stackoverflow.com/a/16459606/376773
  var isWebkit = 'WebkitAppearance' in document.documentElement.style;
  // http://stackoverflow.com/a/398120/376773
  var isFirebug = window.console && (window.console.firebug || (window.console.exception && window.console.table)) && true;
  // firefox >= v31? https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  var isFirefoxWithLogStyleSupport = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;

  return (isWebkit && !isEdge) || isFirebug || isFirefoxWithLogStyleSupport || false
}

//Except for IN_BROWSER constants should be side effect free for transpiler tree shaking
var IN_BROWSER = new Function("try {return this===window;}catch(e){ return false;}")();
var SUPPORTS_UTF8 = IN_BROWSER || (process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color');

function supportsLogStyles(){
    return IN_BROWSER && browserSupportsLogStyles_1$1();
}

function debugging(){
    if(IN_BROWSER){
        return /(^\?|&)DEBUG=(1|true)/.test(window.location.search + '');
    }
    return !!process.env['DEBUG'] && process.env['DEBUG'] === 1 || process.env['DEBUG'] === 'true';
}

if(IN_BROWSER){
    console.log('in browser');
}else{
    console.log('in node');
}

console.log(SUPPORTS_UTF8 ? 'supports utf8' : "doesn't support utf8");

var DEBUG = debugging();

console.log('supports log styles ',supportsLogStyles());

}());
//# sourceMappingURL=code.js.map
