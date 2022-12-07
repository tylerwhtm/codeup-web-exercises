function sayHello(name){
    console.log("Hello " + name );
}

sayHello("Tyler");
sayHello("Joe");
sayHello("Rob");

function makeHelloString(name){
    return "Hello " + name;
}

    var x = makeHelloString("Hello");
console.log(x);


function greaterThen(a,b){
    return a > b;
}

console.log (greaterThen(5,2));

var z = "Hello";
console.log(typeof z)

var z = true
console.log(typeof z)

var z = 42
console.log(typeof z)

if (typeof z === "number"){
    console.log("jjj")
} else {
    console.log(false)
}

function isGreaterThen (a,b){
    return a > b;
}

function isLessThen(a,b){
    return a < b;
}

function findLongestString(a,b){
    if (typeof a !== "string" && typeof b !== "string"){
        return "";
    }
    if(typeof a !== "string"){
        return b;
    }
    if(typeof b !== "string"){
        return a;
    }
    if(a.length > b.length) {
        return a;
    } else {
        return b;
    }}

function isFactor (x,y){
    if (x === true)
        return false;
}

function isTypeMatch(a,b) {
    return typeof a === typeof b
}

function calcCube(x){
    return x * x * x
}

function add (a, b){
    if(typeof a !== "string" || typeof b !== "number"){
        return false;
    }
    if(typeof b !== "string" || typeof a !== "number"){
        return false;
}

if (isNan(a)|| isNaN(b)) {
    return false;
}}