function addTwo(num: number): number
{
    return num + 2;
}

function getUpper(val: string):string
{
    return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid: boolean)
{
    return "Nice";
}

let loginUser = (name: string, email:string, isPaid: boolean = false) => 
{

}

addTwo(5);
getUpper("hello");
signUpUser("Ty", "ty@g.com", false)
loginUser("T", "t@t.com")


// function getValue(myVal: number): string | boolean
// {
//     if(myVal > 5)
//     {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => 
{
    return ""
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1,2,3]
// typescript will be able to tell and switch to the string or the number depending on which it sees
heroes.map((hero):string => 
{
        return `Hero is ${hero}`
})

function consoleError(errMsg: string): never
{
    throw new Error(errMsg);
}

export{}