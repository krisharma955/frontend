// Creating an element
var h1 = document.createElement("h1");
h1.innerHTML = "Hello from JS";

document.body.appendChild(h1)

//Import & Export 
import a from './app.js'
console.log(a);

//Named Export & Import
import {arr} from './app.js'
console.log(arr[1]);
