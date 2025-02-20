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


