let n = Math.round(Math.random() * 100 + 1);
let a = prompt("enter number")
let c = 1
while (a != n) {

    if (a > n)
        a = prompt("High");
    else if (a < n)
        a = prompt("low");

    c++;

}

console.log("you took" + c + "guesses");