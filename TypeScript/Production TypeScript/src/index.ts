// How to write classes in TypeScript

// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string)
//     {
//         this.email = email;
//         this.name = name;
//     }
// }

// const ty = new User("t@t.com", "ty");
// ty.city = "delhi" //cannot do this because of readonly
// ty.name  //can no longer even access it because it has been set to private


// A more professional way to write the class above
// also introducing getters and setter

class User {

    //private can only be accessed within this class
    // private _courseCount = 1

    //Protected can be accessed within this class and any classes that inherit from it
    protected _courseCount = 1

    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        private userId: string
        ){
    }

//private method example
    private deleteToken()
    {
        console.log("Token deleted")
    }

    get getAppleEmail(): string
    {
        return `Apple${this.email}`
    }

    get courseCount(): number
    {
        return this._courseCount
    }

    //typescript wants nothing here for setters, so no return type, not even void
    // set courseCount(courseNum): void         WILL THROW ERROR
    set courseCount(courseNum)  
    {
        if(courseNum <= 1) 
        {
            throw new Error("Coure count should be more than 1")
        }
        this._courseCount = courseNum

    }
}

class SubUser extends User 
{
    isFamily: boolean = true
    changeCourseCount()
    {
        this._courseCount = 4
    }
}


// ty.deleteToken() wont work, private method
