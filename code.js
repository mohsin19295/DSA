// Create a promise that prints 'Hello Promise'
const myPromise = new Promise((resolve, reject) => {
    let x = 10;
    if (x === 10) {
        resolve('Hello Promise')
    } else {
        reject({message: 'Not Valid Promise'})
    }
})

myPromise
.then((message) => console.log(message))
    .catch((err) => console.log(err.message))


// Create async/await that prints 'Hello Async'
const asyncFun = () => {
    return new Promise((resolve, reject) => {
        let y = 10;
        if (y === 10) {
            resolve('Hello Async')
        } else {
            reject({message: 'Not Valid Async'})
        }
    })
}

const myAsync = async () => {
    try {
        let res = await asyncFun()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}

myAsync()



// Create a callBack that prints 'Hello CallBack'



// Create a closure that increment count by 1
function incrementCount(init) {
    let count = init
    return function (){
        if (typeof init !== 'number') {
            console.log('Not Valid Number')
        } else{
            console.log(count++)
        }
    }
}
const counter = incrementCount(2)
counter()

/*
Why Store in a Variable?
When you call incrementCount(2), it returns the inner function, but that function does not execute immediately. Instead, it is returned as a reference to be called later. Here’s the reasoning behind the steps:

Preserving State:
By storing the returned function in a variable (counter), you maintain access to the count variable. Each time you call counter(), the same instance of count is used, allowing it to increment correctly across multiple calls.
Function Invocation:
If you were to call incrementCount(2) directly without storing it in a variable, the returned inner function would be immediately discarded and would not be callable afterward.
*/

const sayHello = (callback) => {
    let error = false;

    if (!error) {
        callback(null, 'Hello')
    } else {
        callback(new Error('Not valid'))
    }
}

const mayCallBack = ((err, message) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(message)
    }
})

sayHello(mayCallBack)

/*
In JavaScript, it is a common convention in callbacks to pass two arguments: the error and the result. This pattern is often referred to as the "error-first callback" pattern. Here's why we use this approach:

Error-First Callback Pattern:
First Argument (Error): This is reserved for the error, which is passed as the first argument. If there is no error, null is passed instead. This allows the calling function to check whether an error occurred.

Second Argument (Result/Data): The second argument is for the actual result or data to be passed back to the caller when there is no error.
*/