// will automatically hold all of the arguments passed to our function

// function sum() 
// {
//     return arguments.reduce((total, el) => total + el);
// }

//Since arguments is not an array, this will just end up giving an error
// console.log(sum(34,65,77));




// Rest params will collect all remaning arguments into an actual array
// Since 'arguments' acts like an array, but is not.


//Looks like spread but is not
// All values passed in will be stored in nums
//Called rest because it will "collect the REST of the values"
function sum(...nums)
{
    return nums.reduce((total, el) => total + el);
}

console.log(sum(34,65,77));

function raceResults(gold, silver, ...others)
{
    console.log(`The gold goes to...${gold}`);
    console.log(`The silver goes to...${silver}`);
    console.log(`All other competitors...${others}`);
}

console.log(raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis'));

// 'arguments' does not work within arrow functions at all