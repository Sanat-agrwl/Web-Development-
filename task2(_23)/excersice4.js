//clock


setInterval(function () {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    console.log(d + " ", h + " hours ", m + "minutes ", s + "seconds")
}, 5000)
