//1
let obj = {
    student1: 95,
    student2: 98,
    student3: 99,
    student4: 97,
    student5: 96
}

for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
}

//2
let n = 0;
while (n != 10) {
    n = prompt("enter a number");
    console.log("try again");

}
//3

const mean = (r, t, y, u) => {
    return (r + t + y + u) / 4
}