const password = prompt("Please enter a new password");


//password must be 6+ characters
if(password.length >= 6)
{
    
//password cannot include spaces

        if(password.indexOf(' ') === -1)
        {
            console.log("no spaces detected");
        }
        else
        {
            console.log("Password must not contain spaces");
        }

    console.log("Password meets requirements!");
}
else 
{
    console.log("Password is too short");
}

