"use strict";

// the "use strict"; at the top enables strict mode for all of the code in the file
// ONLY POSSIBLE IF IT'S THE FIRST STATEMENT

/* 
"use strict";
function example() {
    return something;
}

is also usable, when strict mode should only be applied to chosen function/s
*/

const COLOR_RED = "#FF0000";
const pi = 3.14;
let userName = prompt("What's your name?", "Joseph");

console.log(typeof pi);

alert(`Pi: ${pi}, Name: ${userName}`);

if(confirm("Want to see a mouse?")) {
    alert("*<3O~");
}

// assignments also return values and be chained
let a;
let b;
let c;
alert(c = 3 + 3);
a = b = c;