// factorial of a number 
let factorial = 1
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 1; i < n; i++) {
    factorial *= (i + 1)
}
console.log(" Factorial of" + n + " is " + factorial)



let obj = {
    student1: 95,
    student2: 98,
    student3: 99,
    student4: 97,
    student5: 96
}

// For in loop
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Sanat") {
    console.log(b)
}

//while loop

let i = 0;
let num = 10;
while (i < num) {
    console.log(i);
    i++;
}

// do while loop

let j = 0;
let num1 = 10;
do {
    console.log(j);
    j++;
} while (j < num1) 
