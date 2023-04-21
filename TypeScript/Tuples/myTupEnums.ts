// const user: (string | number)[] = [1,'te']
//how to write this as a tuple, so that data must come in a certain order like [string, number]
//instead of [number, string]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255,123,121]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com";
