
let runAgain = true
while (runAgain) {
    let a = prompt("enter your age")
    a = Number.parseInt(a)

    if (a < 0) {

        console.error("enter a valid age")
        break;
    }
    if (a > 18) {
        alert("you can drive")
    }
    else {
        alert("you cant drive")
    }
    runAgain = confirm("want to see again")

}
// if(a>4)
// location.href = "https:/www.google.com "
// color = prompt("enter color")
// document.body.style.background = color
