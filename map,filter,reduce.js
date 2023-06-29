let a = [45, 23, 21]

//array map method
let array = a.map((value, index) => {
    console.log(value)
    return value + 1;
})
console.log(array)

//filter method   
let arr2 = a.filter((value) => {
    return value > 25
})
console.log(arr2)

//reduce method
let arr3 = a.reduce((h1, h2) => {
    return h1 + h2
})
console.log(arr3);
