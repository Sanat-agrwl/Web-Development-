
let x = () => {
    window.location = "https://www.google.com";
    window.focus()
}
// document.getElementById("google").addEventListener('click', function () {
//     window.location = "https://www.google.com";

// }
document.getElementById("google").addEventListener('click', x)

let a = setInterval(function () {
    document.getElementById("bulb").classList.toggle("bulb")
}, 300)
clearInterval(a)
