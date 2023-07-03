// to insert a element 
// let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + <h1>Hello</h1>;


// to create and insert an element
let div = document.createElement("div");
div.innerHTML = "<h1>HELLO</h1>";
a.appendChild(div);

// // to add at diffrent positions
// Node.append(a)
// Node.prepend(a)
// Node.before(a)
// Node.after(a)

//first.insertAdjacentHTML('beforebegin',"<h1>HELLO</h1>")
//first.insertAdjacentHTML('beforeend',"<h1>HELLO</h1>")
//first.insertAdjacentHTML('afterbegin',"<h1>HELLO</h1>")
//first.insertAdjacentHTML('afterend',"<h1>HELLO</h1>")

//to remove a node
//elem.remover() //first.remove()