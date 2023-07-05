(function x() {
    setTimeout(() => {
        console.log("hello \n world")
    }, 2000)
})()

let n = 2000
const a = () => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("resolved")
            resolve(50)
        }, n)
    })
}
a()