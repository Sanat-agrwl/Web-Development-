console.log(document.cookie)
document.cookie = "name=sanat"
document.cookie = "name2=AGRAWAl"
document.cookie = "name=SANAT"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)