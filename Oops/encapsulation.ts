// Encapsulation means binding properties and methods inside a class 
// and controlling access using access modifiers (private, protected, public).

// 1.Private
// => only accessible within class

// 2.Protected
// => only accessible within class and its subclasses

// 3.Public
// => Properties and methods are accessible anywhere (inside and outside the class)



class Bank{
    protected balance: number = 0;

    displayBalnce(bal:number){
        this.balance+=bal;
        console.log("Bank balance is :",this.balance)
    }
}
const bank = new Bank();
bank.displayBalnce(100);
bank.displayBalnce(200);