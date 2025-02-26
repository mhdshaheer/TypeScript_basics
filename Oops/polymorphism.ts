

// It allows different classes to have the same method name but different implementations.
// --------OR---------
// Polymorphism allows methods to have different behaviors based on the object type.


// Polymorphism - method overriding

// => A subclass provides its own implementation of a method already defined in the parent class.
// => The method must have the same name and parameters as the parent method.
// => The child class "overrides" the behavior of the parent class.

class Cars{
    carType(){
        console.log("All cars...");
    }
}
class Bmw extends Cars{
    carType(): void {
        console.log("It is BMW");
    }
}

class Audi extends Cars{
    carType(): void {
        console.log("It is Audi");
    }
}

const bmw = new Bmw()
bmw.carType();
const audi = new Audi();
audi.carType();


// Polymorphism - method overloading;

// => Same method name, but different parameter lists.
// => Only works in TypeScript (not in JavaScript) because TypeScript provides type checking.

class Calculator{
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:any,b:any):any{
        return a+b
    }
}

const calc = new Calculator();
console.log(calc.add(2,6));
console.log(calc.add("hai ","shaheer"))
