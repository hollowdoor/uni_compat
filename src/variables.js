import { IN_BROWSER } from './constants.js';
const uni = IN_BROWSER && window || global;


export { uni };
