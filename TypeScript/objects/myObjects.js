"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
// name: "ty",
// email: "t@gmail.com",
// isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name: "ty", isPaid: false})   
//better way
var newUser = { name: "h", isPaid: false, email: "h@H.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createPerson(person) {
    return { name: "", email: "", isActive: true };
}
createPerson({ name: "", email: "", isActive: true });
var myExample = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myExample.email = "h@gmail.com";
