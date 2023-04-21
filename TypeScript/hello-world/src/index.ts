//DATA TYPE BASICS
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;
// level = 1;
// level = 'a'; //Using the any type defeats the purpose of using typescript, so avoid 
// function render(document)
// {
//     console.log(document);
// }


//ARRAYS
let numbers: number[] = [1, 2, 3]; //explicitly saying that numebrs is a number array
numbers.forEach(n => n.toFixed) //editor knows the type of n so it offers code completion, thus it shows all the methods of number objects


//Tuples
// (id, name) needed for a user
//recommended to restrict tuples to only two values
let user: [number, string] = [1, 'Mosh'];
user.push(1)

//ENUMS
const small = 1;
const medium =2;
const large = 3;

//Or using enums

//PascalCase
const enum Size {Small, Medium, Large};
// enum Size {Small = 1, Medium = 2, Large = 3}; can also explicitly set values
// enum Size {Small = 's', Medium = 'm', Large = 'l'}; can also explicitly set values

let mySize: Size = Size.Medium;
console.log(mySize);

//FUNCTIONS

function calculateTax(income:number, taxYear = 2022): number //can declare the return type
{
    if(taxYear < 2022)            //(taxYear || 2022) ----> if taxyear is not supplied, will default to 2022 
    {
        return income * 1.2;
    }
    else return income * 1.3
}

calculateTax(10_000);


//OBJECTS - TYPE ALIASES

//Declaration of a type alias (defines all the methods and properties that an employee object should have)
type Employee = {
    readonly id: number,   //'readonly' will stop us from accidentally modifying the value of this property
    name: string,
    retire: (date: Date) => void
}


let employee: Employee = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
};


//UNION TYPES (can give variable or function parameter more than one type)

function kgToLbs(weight: number | string): number
{
    //Narrowing
    if (typeof weight === 'number')
    {
        return weight * 2.2
    }
    else 
    {
        return parseInt(weight) * 2.2
    }
}

//INTERSECTION TYPES (can combine multiple types into a new type)

type Draggable = {
    drag: () => void   
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// LITERAL TYPES

//literal (exact, specific value)
type Quantity = 50 | 100; //literal type
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';


//NULLABLE TYPES

function greet(name:string | null | undefined) //once you declare it can be a string or null, you can now pass null into the function call
{
    if(name)
    {
        console.log(name.toUpperCase());
    }
    else
    {
        console.log('Hola!')
    }
    
}
greet(null);


//OPTIONAL CHAINING

type Customer = {
    birthday?: Date //optional becuase of ?
};

function getCustomer(id: number): Customer | null | undefined
{
    return id === 0 ? null : {birthday: new Date()} //return if id = 0 return null otherwise return a customer object with this birthdate
}

let customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
// {
//     console.log(customer.birthday)
// }

//MUCH SIMPLER WAY TO WRITE THIS WITH TYPESCRIPT
//Uses Optional Property Access Operator (?.)
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
// if(customer !==null && customer customers !== undefined) DONT NEED BEACUSE OF ?.
//customers?.[0] cann just tack on ?. without the need for the previous line
 
//Optional Call
let log: any = null;
log?.('a');