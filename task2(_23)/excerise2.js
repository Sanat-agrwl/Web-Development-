let a = Math.round(Number.parseInt(Math.random() * 3 + 1))
let b = prompt("Enter S,W or G ")

switch (b) {
    case "S":
        if (a == 1)
            alert('its a draw')
        else if (a == 2)
            alert("You Win")
        else
            alert("you lose")
        break;

    case "W":
        if (a == 2)
            alert('its a draw')
        else if (a == 3)
            alert("You Win")
        else
            alert("you lose")
        break;

    case "G":
        if (a == 3)
            alert('its a draw')
        else if (a == 1)
            alert("You Win")
        else
            alert("you lose")
        break;

}