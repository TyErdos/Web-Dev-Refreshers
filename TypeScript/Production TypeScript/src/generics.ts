// generics make code reusable in production level code
// denoted by angular brackets < >

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number
{
    return val
}

function identityTwo(val: any): any
{
    return val
}

function identityThree<Type>(val: Type): Type 
{
    return val
}

// identityThree(3)
// // function identityThree<3>(val: 3): 3, identifies that this is a number and will return a number

// identityThree("3")
// function identityThree<"3">(val: "3"): "3", indentifies that this is a string, and thus will return a string

// most people will define like this

function identityFour<T>(val: T): T 
{
    return val
}

interface Bottle
{
    brand: string,
    type: number
}

// identityFour<Bottle>({})
// {
// }

//generics, taking inputs and returning values, arrays and arrow function

function getSearchProducts<T>(products: T[]): T
{
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}


// might see <T,> used to just indicate that this is not some form of 
// html or JSX syntax, but is a generic
const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some DB operations
    const myIndex = 4;
    return products[myIndex]
}


// OTHER GENERIC INFO & GENERIC CLASSES

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U):object 
{
    return {
        valOne, 
        valTwo
    }

}

// anotherFunction(3, {connection: "", username: "", password: ""})

interface Quiz 
{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class canSell<T>{
    public cart: T[] = []

    addToCart(product: T)
    {
        this.cart.push(product)
    }
}

