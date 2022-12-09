const firstname = prompt("Enter your first name");

if (!firstname)
{
    firstname = prompt("Try again");
}


const age = 45;
if(!(age >= 0 && age < 5 || age >= 65))
{
    console.log("You are not a baby or a senior");
}
