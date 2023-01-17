const btn = document.querySelector("#v2");

btn.onclick = function()
{
    console.log("You clicked me");
    console.log("I hope it worked");
}

function scream()
{
    console.log("Ahhhhhhhhhhhh");
    console.log("Hey there");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function()
{
    alert('You just clicked the h1!');
}


// EVENT LISTENER

const btn3 = document.querySelector('#v3');

//First argumnet is the type of event, and the second argument is our callback (the function we want to run)

// btn3.addEventListener('dblclick', function() 
// {
//     alert("Clicked!");
// })

btn3.addEventListener('mouseup', function() 
 {
     alert("Clicked!");
 })

 function twist()
 {
    console.log("Twist");
 }

 function shout()
 {
    console.log("Shout");
 }

 const tasButton = document.querySelector("#tas");

//  tasButton.onclck = twist();
//  tasButton.onclck = shout();

 // cant have two different callback functions for the same event, at least not using this approach
 // but you can with event listener

 tasButton.addEventListener('click', twist, {once: true}); //using the "options" object, in this case, "once" which will run once then remove this event listener
 tasButton.addEventListener('click', shout);


