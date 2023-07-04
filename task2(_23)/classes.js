class RailwayForm {

    //constructor(){
    //this ia always called
    //}
    submit() {
        console.log(this.name + " : your form is submitted for no." + this.n)
    }

    cancel() {
        console.log(this.name + " : your form is cancelled for no." + this.n)
    }

    fill(name, n) {
        this.name = name
        this.n = n

    }
}
let sanatForm = new RailwayForm();
let samForm = new RailwayForm();

sanatForm.fill("sanat", 12100)
samForm.fill("sam", 121121)
sanatForm.submit()
samForm.submit()
sanatForm.cancel()