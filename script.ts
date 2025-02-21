// Variable declaration and initialization

let userName : string = "shaheer";
let age : number = 22;
let alive : boolean = true;
let skills : (string | number) []= ['JS','Node',34];
let emptyArr : [] = [];
let userDetail : {name:string;age:number ; salary:number} = {
    name :'shaheer',
    age:22,
    salary:1000000
}

// Type intference
// If you don't explicitly mention a type, TypeScript infers it based on the value.
let collage = "EKCTC";

// Type Any
// If you don’t know the type in advance, use any, but it's not recommended.
let randomValue:any = 123456789;
randomValue = "hai"

// ======================================================================
// Interface
// Interface always represents on first letter uppercase

interface Details {
    name : string;
    age : number;
    salary : number;
    getName : () => void;
}
// We can reuse the interface method "Details".
let detailsUser : Details = {
    name : "shaheer",
    age : 22,
    salary : 1000000,
    getName() {
        console.log(this.name);
    },
}
let detailsAdmin : Details = {
    name : "adam",
    age : 28,
    salary : 12000000,
    getName() {
      console.log(this.name);
        
    },
}

// ======================================================================

// Type 
type AllDetail = {
    name : string;
    age : number;
    salary : number,
    getName : ()=>void
}

let userAllDetail : AllDetail = {
    name : "shaheer",
    age : 22,
    salary : 2500000,
    getName() {
        console.log(this.name)
    },
}


// Terinary Operator
let isEven : boolean = ( 10 % 2 == 0) ? true : false;

// If else
let score : number = 77;
if(score>50){
    console.log("Passed");
}else{
    console.log("Failed");
}

// Switch
let day : number = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            default:
                console.log("Another day");
                break;
            }
            
            // Functions
            function sum(a : number , b : number , c ?: number) : number{
    return  c? a+b+c :a+b; // Optional parameter
}
console.log(sum(1,2))

// Default Parameter
function myName( name : string="shaheer") :string {
    return name;
}
console.log(myName())

// ======================================================================
// ============================= OOPS ===================================

// Class and objects
class Person{
    name:string;
    age : number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    getName():void{
        console.log(`${this.name}`);
    }
}

const person1 = new Person("shaheer",22);
person1.getName();

// Inheritance
class Employee extends Person{
    role : string;
    constructor(name:string,age:number,role:string){
        super(name,age);
        this.role = role;
    }
    getRole(){
        console.log(`${this.name} : ${this.role}`);
    }
}
const emp = new Employee("Shaheer",22,"Software Engineer");
emp.getRole();

// Polymorphism
// Polymorphism allows a child class to override a method from the parent class.

class Animal{
    sound():void{
        console.log("Normal animal sound");
    }
}
class Dogs extends Animal{
    sound():void{
        console.log("Bark! Bark!");
    }
}
const dog = new Dogs();
dog.sound();

// Import and Export modules
// export function addSum(num1:number,num2:number):number{
//     return num1+num2;
// }
// import {addSum} from './path'
// addSum(1,5);


// Named Types
// Custom data type creation
type resStatus = 'Pending' | 'Completed' | 'Failed';

let paymentStatus : resStatus = 'Failed';

// Function Overloading
function add(num1 :string, num2:string): string;
function add(num1 :number ,num2:number): number;
function add(num1: any, num2: any):any{
    return num1+num2;
}
add(1,4);
add("1","4");

// Generics

function getNum<T>(num : T):T{
    return num
}
getNum<string>("77");
getNum<number>(77);

// Type combination
// type detailsOfUser = {
//     name : string;
//     age : number;
// }

// type detailsOfAdmin = detailsOfUser & {
//     role : string;
// }

// Interface combination
interface detailsOfUser{
    name : string;
    age : number;
}

interface detailsOfAdmin extends detailsOfUser{
    role : string;
}




