function someErrorHandleMethod(error) {
    throw new Error("...")
    //throw 10
    //throw true
    //...
}

function someMethod(obj) {
    try {
        console.log(obj.name.toUpperCase())
    } catch(e) {
        someErrorHandleMethod(e)
    } finally {
        console.log("finally method")
    }
}

const obj = {}
someMethod(obj)