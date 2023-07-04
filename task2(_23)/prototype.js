let a = {
    name: 'sanat',
    age: 18

}

let p = {

    run: () => {
        console.log("runn")
    }
}

a.__proto__ = p; //to set p as prototype of a 

a.run();