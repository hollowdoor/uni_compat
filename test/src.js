import { IN_BROWSER, SUPPORTS_UTF8, debugging, supportsLogStyles } from '../';

if(IN_BROWSER){
    console.log('in browser');
}else{
    console.log('in node');
}

console.log(SUPPORTS_UTF8 ? 'supports utf8' : `doesn't support utf8`)

const DEBUG = debugging();

console.log('supports log styles ',supportsLogStyles());
