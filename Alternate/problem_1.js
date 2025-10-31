const obj = { a: 1, b: 2, c: 3, d: 4 }


// Static
const {c, ...filteredObj} = obj
console.log(filteredObj)


// Dynamic
const getFiltered = (removalKey, obj) => {
    const { [removalKey]: _, ...filteredObj } = obj;
    return filteredObj
}
console.log(getFiltered('c', obj))

// Dynamic with in build
const getFilteredObj = (removedKey) => Object.entries(obj).reduce((acc, [key, value]) => {
    if (key !== removedKey) {
        acc[key] = value;
    }
    return acc;
}, {});

console.log(getFilteredObj('d'))