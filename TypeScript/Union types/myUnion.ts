// when you are not sure what data might come in

let score: number | string = 33 

score = 44;
score = "55";

type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let ty: User | Admin = {name: "ty", id: 334}

ty = {username: "te", id: 334}

function getDbId(id: number | string)
{
    //making some API calls
    console.log(`DB id is: ${id}`);

    if(typeof id === "string")
    {
        id.toLowerCase();
    }
    if(typeof id === "number")
    {
        id + 3;
    }
    
}
getDbId(3)
getDbId("3")

//array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = ["1", 2, 3] //can have both types in arrays

// very strict use case
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" //gives an error


