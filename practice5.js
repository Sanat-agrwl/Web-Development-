//1
let a = [1, 2, 3, 4, 5, 10, 20];
// a.push(prompt("enter a number"));

//2
// let n = 1
// while (n != 0) {

//     a.push(n);
//     n = prompt("enter a number")
// }
//3
let array = a.filter((value) => {
    return value % 10 == 0
})
console.log(array)

//4
let arr1 = a.map((value) => {
    return value * value;
})
console.log(arr1)

//5
let n = [1, 2, 3, 4, 5, 6]
let f = n.reduce((i, j) => {
    return i * j;
})
console.log(f);