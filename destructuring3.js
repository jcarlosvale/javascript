function max({someNumber, someNumber2}) {
    return Math.max(someNumber, someNumber2);
}

const obj = {}
obj.someNumber = 10
obj.someNumber2 = 20
console.log(max(obj))