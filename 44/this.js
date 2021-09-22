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
class Car {
    constructor() {
        this.sayBye = this.sayBye.bind(this);
    }
    sayHi() {
        console.log(`Hello from ${this.name}`);
    }
    get name() {
        return 'Fernando'
    }
}
class Bird {
    get name() {
        return 'Twenty';
    }
}
function sum() {
    return this.a +this.b + this.c;
}
var o = {
    a: 1, b: 2, c: 3,
    get average() {
        return (this.a + this.b + this.c) / 3;
    }
};
Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true
});
console.log(o.average, o.sum);
var o = {f: function() { return this.a + this.b}};
var p = Object.create(o);
p.a = 1;
p.b = 4;
console.log(p.f()); // 5