// Abstraction is an OOP concept that allows us to hide the internal implementation details of a class
// and only expose the necessary functionalities. 
// This helps in reducing complexity and increasing code reusability.


abstract class Bird{
    abstract makeSound():void;
    sleep(){
        console.log("Bird is sleeping..")
    }
}
class Parrot extends Bird{
    makeSound(){
        console.log("chil..chil")
    }
}
const parrot = new Parrot();
parrot.makeSound();
parrot.sleep()