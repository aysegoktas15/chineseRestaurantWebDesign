var message = "in global";
console.log("global: message = " + message);

var functionA = function() {
    var message =  "inside functionA";
    console.log("functionA: message = " + message);
    functionB();
}

function functionB() {
    console.log("functionB: message = " + message);
}

var functionC = function() {
    var message =  "inside functionC";
    console.log("functionC: message = " + message);
    functionB();
}

functionA();
functionC();