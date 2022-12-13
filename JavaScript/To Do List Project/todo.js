let userInput = prompt("What would you like to do? Please enter in a command");
const toDo = ["Collect chicken eggs", "Clean litter box"];

while(userInput !== "quit" && userInput !== "q")
{
    if(userInput === "list")
    {
        console.log("***********");
        for(let i =0; i < toDo.length; i++)
        {
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("***********");
    }
    else if (userInput === 'new')
    {
        const newToDo = prompt("What is the new To Do?");
        toDo.push(newToDo);
        console.log(`${newToDo} added to list`);
    }
    else if(userInput === 'delete')
    {
        const index = parseInt(prompt('Delete which index number?'));
        if(!Number.isNaN(index))
        {
            const deleted = toDo.splice(index,1);
            console.log(`Ok, deleted index ${deleted[0]}`);
        }
        else
        {
            console.log("Unkown index");
        }
        
    }
    userInput = prompt("What would you like to do? Please enter in a command");
}

console.log("Quitting application.")


