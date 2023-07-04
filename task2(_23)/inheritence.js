class Animal {
    run() {
        console.log("running")
    }
    shout() {
        console.log("shouting")
    }
    static f() {// it cant be used by object 

    }
    f()
}

class monkey extends Animal {


    legs() {
        console.log("2 legs")
    }
    run() {
        super.run()
        console.log("monkey running")
    }
}
Animal.f()//static
let m = new monkey()

m.run()