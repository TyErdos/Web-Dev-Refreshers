"use strict";
// generics make code reusable in production level code
// denoted by angular brackets < >
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)
// // function identityThree<3>(val: 3): 3, identifies that this is a number and will return a number
// identityThree("3")
// function identityThree<"3">(val: "3"): "3", indentifies that this is a string, and thus will return a string
// most people will define like this
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
// {
// }
//generics, taking inputs and returning values, arrays and arrow function
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// might see <T,> used to just indicate that this is not some form of 
// html or JSX syntax, but is a generic
const getMoreSearchProducts = (products) => {
    // do some DB operations
    const myIndex = 4;
    return products[myIndex];
};
