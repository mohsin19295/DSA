// Write a debounce code
const debounce = (fun, delay) => {
    let timer;
    return function myFun(...args) {
        let context = this;
        clearInterval(timer)
        timer = setTimeout(()=> fun.apply(context, args), delay)
    }
}



// Write a throttle code
const throttle = () => {
    
}