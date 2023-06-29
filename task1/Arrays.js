let marks = [100, 98, 99, 96, 95, null];

console.log(marks);

console.log(marks[2]);

console.log(marks.length);

marks[5] = 94 //adding new values 
console.log(marks);

//Array Methods

let str = marks.toString();
console.log(str)

let c = marks.join("_");
console.log(c)

marks.pop()
console.log(marks)

marks.push(94)
console.log(marks)

marks.shift()
console.log(marks)

marks.unshift(100)
console.log(marks)

delete marks[0]
console.log(marks) // doesnot effect length

let ary = [98, 99, 54, 56, 76, 87]
let newary = marks.concat(ary);
console.log(newary)

//sorting it sorts aplhabatically
marks.sort()
console.log(marks)

//splice and slice
marks.splice(2, 1, 100, 100) //start ,no.of remove , add,add
console.log(marks)


console.log(marks.slice(2, 5))

//loops in array

for (let i = 0; i < marks.length; i++)
    console.log(i)

//forEach
marks.forEach((element) => { console.log(element) })

//for of
for (let i of marks)
    console.log(i)

//Array.from("sanat")   // to create an array


//for in
for (let i in marks)
    console.log(i)





