// Sets numSides default value to 6 if no number is passed in
function rollDie(numSides = 6)
{
    return Math.floor(Math.random() * numSides) + 1;
}


// Should always have default params be second, third etc, otherwise it will goof up
// Like here if person and msg were switched, it would not recognize that it's supposed to be someones name.
// If for example you input greet("John")
// It will output "John, undefined", with this way of doing it, you need that name in there, and if msg is left blank then
// It will default correctly

function greet(person, msg="Hey there", punc = "!")
{
    console.log(`${msg}, ${person} ${punc}`);
}