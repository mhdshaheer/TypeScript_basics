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
