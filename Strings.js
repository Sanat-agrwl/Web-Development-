let a = "Sanat"
let b = "saarthak"

//template literal
let s = `${a} is friend of ${b}`;
console.log(s);

//Escape sequence character   \'  \n  \t  \r
let c = 'san\'at';
console.log(c);

//string methods

console.log(a.lenth)
console.log(a.toUpperCase())
console.log(a.slice(2, 4))
console.log(a.replace("Sa", "as"))
a.concat(" Agrawal", "is great");
a.trim();//removes whitespaces