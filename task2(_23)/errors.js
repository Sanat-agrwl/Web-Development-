try {
    // console.log(a)
    // to throw a custom error
    throw new Error("sanat");
}
catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    console.log("HA HA")
}
//always runs 
finally {
    console.log("sanat ")
}