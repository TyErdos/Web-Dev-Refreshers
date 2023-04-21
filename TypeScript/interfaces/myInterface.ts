// interfaces are kind of like how the software is an interface for hardware
// you click on a folder and it opens up, you don't know or care 
//how it does it

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string, //other way to write the line above, method that returns a string
    getCoupon(couponName: string, value: number): number 
}

//re-opening the interface (cannot be done with types)
//useful if including a library or something from another developer
//can add onto the existing interface
interface User {
    githubToken: string
}

//inheritance also comes with interfaces
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const ty: Admin = {
    dbId: 12, 
    role: "admin",
    githubToken: "github",
    email: "t@t.com", 
    userId: 2211, 
    startTrial: () => {return "trial started"},
    getCoupon: (name: "ty10", off: 10) => {return 10}
};
