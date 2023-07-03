// let p = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         reject(100)
//     }, 3000)
// })

// async function x() {
//     try {

//         let f = await p
//         console.log(f)
//     }
//     catch (e) {
//         console.log("error has occured")
//     }
// }
// x()

//q2
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(1)
    }, 3000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(2)
    }, 3000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(3)
    }, 3000)
})

let promise_all = Promise.all([p1, p2, p3])

async function y() {
    console.log(new Date().getSeconds())

    let p11 = await p1
    let p22 = await p2
    let p33 = await p3
    console.log(p11, p22, p33)
    // let pa = await promise_all
    // console.log(pa)
    console.log(new Date().getSeconds())

}
y()