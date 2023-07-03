// let promise = new Promise(function (resolve, reject) {
//     console.log("hello")
//     resolve(56)

// })

// let p1 = new Promise((resolve, reject) => {

//     console.log("i am p1 and i am resolved")
//     resolve(50)
// })
// let p2 = new Promise((resolve, reject) => {

//     console.log("i am p2 and i am rejected")
//     reject(new Error("i am an error"))
// })

// p1.then((value) => {
//     console.log(value)
// })
// p2.catch((error) => {
//     console.log("error caught")
// })

// //promise chaining
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("i am resolved after 3 sec")
//         resolve(55)
//     }, 3000)
// })

// p1.then((value) => {
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p2 done")
//         }, 2000)

//     })
//     return p2
// }).then((value) => {
//     console.log("done")
// })

// //loadscript func using promises

// function loadScript(src) {
//     return new Promise((resolve, reject) => {


//         let script = document.createElement("script")
//         script.src = src;
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve(1)
//         }
//         script.onerror = () => {
//             reject(0)
//         }
//     })
// }
// let p1 = loadScript("sanat")
// p1.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log("error loading")
// })

//multiple handlers
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved")
        resolve(1)
    }, 3000)
})

p1.then((value) => { console.log("done") })
p1.then((value) => { console.log("done2") })