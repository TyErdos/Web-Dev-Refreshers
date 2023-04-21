// narrowing is used for when you try to narrow down data types

function detectType(val: number | string){
    if (typeof val === "string")
    {
        return val.toLowerCase();
    }
    // only runs this if it is 100% sure that the return type is number
    return val + 3
}


// treat null like any other data type and be sure to double check for it
function provideId(id: string | null)
{
    if(!id)
    {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase();
}


// example of what bad type gaurding (narrowing) looks like
// from typescript docs
// the reason it is bad is that there is no checking for an empty string

function printAll(strs: string | string[] | null)
{
    // !!!!!!!!!!!!!!
    // DON'T DO THIS!
    //  KEEP READING
    // !!!!!!!!!!!!!!

    if (strs) 
    {
        if(typeof strs === "object")
        {
            for (const s of strs)
            {
                console.log(s);
            }
        }
        else if(typeof strs === "string")
        {
            console.log(strs);
        }
    }
}


// THE "in" OPERATOR WITH NARROWING

interface UserPer
{
    name: string,
    email: string
}
interface AdminPer
{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: UserPer | AdminPer)
{
    if("isAdmin" in account)
    {
        return account.isAdmin
    }
}

// instanceof narrowing & type predicates

function logValue(x: Date | string)
{
    if(x instanceof Date)
    {
        console.log(x.toUTCString());
    }
    else
    {
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish
{
    // pet is a fihs, has a method of swim and is not undefined, then it is indeed a fish
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird)
{
    if(isFish(pet))
    {
        // because of "pet is fish", that funtion will 100% know it is a fish, fixes the issue
        // of pet not knowing if it is a fish or a bird
        pet
        return "fish food"
    }
    else
    {
        pet
        return "bird food"
    }
}

// Discriminated Unions & Exhaustiveness checking

interface Circle
{
    kind: "circle",
    radius: number
}
interface Square
{
    kind: "square",
    side: number
}
interface Rectangle
{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape)
{
    if(shape.kind === "circle")
    {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}



//exhasutive check
function getArea(shape: Shape)
{
    switch(shape.kind)
    {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}