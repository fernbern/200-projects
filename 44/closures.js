function init() {
    var name = 'Mozilla';
    function displayName(){
        alert(name);
    }
    displayName()
}
init();
function makeFunc(){
    var name = 'Mozilla';
    function displayName() {
        alert(name)
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
const arr = [1,2,3,4];
const map1 = arr.map(x => x * 2);
console.log(map1);