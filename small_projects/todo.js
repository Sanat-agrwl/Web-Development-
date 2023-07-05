let c = 0;
localStorage.clear()
document.getElementById("enter").addEventListener('click', (e) => {
    e.preventDefault()
    let a = document.getElementById("text1").value
    document.getElementById("text1").value = "";

    c++;
    localStorage.setItem(c, a)
    let ndiv = document.createElement("div")
    ndiv.textContent = c + ". " + a;
    document.getElementById('output').appendChild(ndiv)

})
document.getElementById("remove").addEventListener('click', (e) => {

    e.preventDefault()
    let dr = document.getElementById("output").getElementsByTagName("div")[document.getElementById("output").getElementsByTagName("div").length - 1]
    dr.remove()
    localStorage.removeItem(c)
    c--;

}) 