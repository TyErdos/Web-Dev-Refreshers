const User = {
    // name: "ty",
    // email: "t@gmail.com",
    // isActive: true
}

function createUser({name: string, isPaid: boolean})
{

}

// createUser({name: "ty", isPaid: false})   
//better way
let newUser = {name: "h", isPaid: false, email:"h@H.com"};
createUser(newUser);


function createCourse(): {name: string, price: number}
{
    return {name: "reactjs", price: 399}
}


//Type Aliases

type Person = {
    // name: string;
    // email: string;
    // isActive: boolean
}

function createPerson(person: Person): Person
{

    return {name:"", email: "", isActive: true}
}

createPerson({name:"", email: "", isActive: true})

// READONLY and Optional

type Example = {
    readonly _id: string; //once readonly is added this can no longer be manipulated ex: in a mongodb database or something similar
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number  // ? marks it as optional
}
   
let myExample: Example = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
    //using two previous types to define a new third type
    // Simple example here but if there was many many items within those previous types this would be helpful in order to not have to redefine them
}

myExample.email = "h@gmail.com";
// myExample._id = "1234"  //Cannot assign to '_id' because it is a read-only property.

export{}