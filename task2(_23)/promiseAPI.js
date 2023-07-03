let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved p1")
        resolve(1)
    }, 3000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved p2")
        reject(2)
    }, 3000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved p3")
        resolve(3)
    }, 3000)
})

// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value)
// })

//even 1 reject than also it runs
let promise_allset = Promise.allSettled([p1, p2, p3])
promise_allset.then((value) => {
    console.log(value)
})
//returns the fastest promise
let promise_race = Promise.race([p1, p2, p3])
promise_race.then((value) => {
    console.log(value)
})
//returs first resolved value
let promise_any = Promise.any([p1, p2, p3])
promise_any.then((value) => {
    console.log(value)
})

