//Except for IN_BROWSER constants should be side effect free for transpiler tree shaking
const IN_BROWSER = new Function("try {return this===window;}catch(e){ return false;}")();
const IN_NODE = !IN_BROWSER && typeof module !== 'undefined';
const SUPPORTS_UTF8 = IN_BROWSER || (process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color');

export {
    IN_BROWSER, IN_NODE, SUPPORTS_UTF8
};
