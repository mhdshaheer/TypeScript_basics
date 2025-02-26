// Inheritance allows one class (child) to inherit properties and 
// methods from another class (parent).


class People{
    details(){
        console.log("We have one brain");
    }
}
class Man extends People{
    quality(){
        console.log("Brave...");
    }
}
const man = new Man();
man.details();
man.quality();