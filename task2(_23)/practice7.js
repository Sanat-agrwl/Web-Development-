
//1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

//2

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
//3
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "red"
});

