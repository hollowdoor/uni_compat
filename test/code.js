(function () {
'use strict';

//Except for IN_BROWSER constants should be side effect free for transpiler tree shaking
var IN_BROWSER = new Function("try {return this===window;}catch(e){ return false;}")();
var SUPPORTS_UTF8 = IN_BROWSER || (process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color');

if(IN_BROWSER){
    console.log('in browser');
}else{
    console.log('in node');
}

console.log(SUPPORTS_UTF8 ? 'supports utf8' : "doesn't support utf8");

//console.log(supportsColor());

}());
//# sourceMappingURL=code.js.map
