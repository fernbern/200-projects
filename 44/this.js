const test = {
    prop: 42,
    func: function(){
        return this.prop;
    },
};
console.log(test.func());
console.log(this === window);
a = 37;
console.log(window.a);
this.b = 'MDN'
console.log(window.b);
console.log(window.b);
console.log(window.b);
console.log(b);
function f1() {
    return this;
}
f1() === window; // true
f1() === globalThis; // true
console.log('hello world');
console.log(globalThis);
var getGlobal= function() {
    if (typeof self !== 'undefined') {return self; }
    if (typeof window !== 'undefined') {return window; }
    if (typeof global !== 'undefined') {return global; }
};
var globals = getGlobal();
if(typeof globals.setTimeout !== 'function'){
    // no netTimeout in this envirenment
}
function f1() {
    'use struct';
    return this;
}
f1() === undefined;
class Example {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        console.log(Object.getOwnPropertyNames(proto));
    }
    first(){}
    second(){}
}
new Example();
this = new Base();
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
    constructor() {
        return {a: 5}
    }
}
class Bad extends Base {
    constructor(){}
}
new Good();
new AlsoGood();
new Bad(); // Reference Error
// this in function context
var obj = {a: 'Custom'};
var a = 'Global';
function whatsThis() {
    return this.a;
}
whatsThis();
whatsThis.call(obj);
whatsThis.apply(obj);
