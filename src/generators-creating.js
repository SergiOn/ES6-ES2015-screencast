"use strict";

/*
function* generator() {}
function * generator2() {}
function *generator3() {}

let generator4 = function () {};

let obj = {
    *generator() {}
};

class SomeClass {
    *generator() {}
}
*/


function* generator() {
    let result = yield 10;
    yield 20;
    console.log('Result1:', result);
    yield 30;
    console.log('Result2:', result);
    yield 40;
}

let iterator = generator();
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));
console.log(iterator.next(4));
console.log(iterator.next(5));
