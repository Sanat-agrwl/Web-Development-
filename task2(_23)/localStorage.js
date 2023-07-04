let key = prompt("enter your key")
let value = prompt("enter your value")

localStorage.setItem(key, value)

console.log(localStorage.getItem(key))

localStorage.removeItem(key)

localStorage.clear()//to remove all

localStorage.key(0)
