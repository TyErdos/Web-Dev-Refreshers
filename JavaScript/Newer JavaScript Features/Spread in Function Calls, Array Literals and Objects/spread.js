
// SPREAD WITH FUNCTION CALLS

Math.max(13,4,5,6,7,8,9,55,332,67876,6754);

const nums = [13,4,5,6,7,8,9,55,332,67876,6754];

//This will not work, cause Math.max is expecting separate arguments, not an array
// Math.max(nums);

//Can use spread (...) in order to "spread" this array into separate arguments 
Math.max(...nums);

Math.min(...nums);

console.log(...nums); // Will print each element of the array and not just the array itself

console.log(...'hello');


// SPREAD WITH ARRAY LITERALS

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

//Copies everything over from the cats and dogs arrays into a new array
const allPets = [...cats, ...dogs, 'Speedy'];

const hello =['Hello'];
console.log([..."hello"]);


//SPREAD WITH OBJECT LITERALS 

const feline = 
{
    legs: 4,
    family: 'Felidae'
};

const canine = 
{
    isFurry: true,
    family: 'Caninae'
};

console.log({...feline, color:'black'});

const catDog = {...feline, ...canine, family: 'Steel'};

console.log({...[2,4,6,8]});

console.log({..."Hello"});

// In this example, we are taking in some data from a form
// and then we would like to add some info onto it such as:
// a user id, admin status, etc.

const dataFromForm =
{
    email: 'Blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser =
{
    ...dataFromForm,
    id: 2345,
    isAdmin: false
}
