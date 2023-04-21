// when you are not sure what data might come in
var score = 33;
score = 44;
score = "55";
var ty = { name: "ty", id: 334 };
ty = { username: "te", id: 334 };
function getDbId(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 3;
    }
}
getDbId(3);
getDbId("3");
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, 3]; //can have both types in arrays
// very strict use case
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "crew"; //gives an error
