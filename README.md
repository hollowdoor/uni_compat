uni-compat
===

Install
---

`npm install uni-compat`

Usage
---

```javascript
//Import some constants
import { IN_BROWSER, IN_NODE, SUPPORTS_UTF8 } from 'uni-compat';
//Your code...
```

```javascript
//Import some variables
import {
    uni //A synonym for global, or window
} from 'uni-compat';
//Your code...
```

```javascript
//Import some functions
import {
    supportsColor,
    debugging
} from 'uni-compat';
const TERM_SUPPORTS_COLOR = (()=>{
    const supports = supportsColor();
    return !supports.browser && supports.stdout.hasBasic;
})();
const DEBUG = debugging();
//Your code...
```

## supportsColor()

`supportsColor()` returns the same value as the module [supports-color](https://github.com/chalk/supports-color) in node. In the browser `supportsColor()` returns an object with a browser property equal to true. When in the browser there are css colors, and in node there are ansi colors.

## debugging()

`debugging()` checks for `process.env['DEBUG']`, or `/(^\?|&)DEBUG=(1|true)/.test(window.location.search)` in the browser. `debugging()` returns true if either test is true.

About
---

`uni-compat` is a collection of commonly used constants, and/or functions used for compatibility checking for node, and browser environments.

The module structure for `uni-compat` is optimized for tree shaking in transpilers.
