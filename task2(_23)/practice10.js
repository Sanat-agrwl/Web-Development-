url = "https://kontests.net/api/v1/all"
let p = fetch(url)
p.then((r) => {
    return r.json()
}).then((item) => {
    for (let i in item) {

        console.log(item[i])
    }
})
