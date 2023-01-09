console.log(document.querySelector('p').innerText);

// can remove everything and replace with whatever you want
// console.log(document.querySelector('p').innerText='lolololol');

console.log(document.querySelector('p').textContent);

// const allLinks = document.querySelectorAll('a');

// //makes every link say the phrase inside the for loop
// for(let link of allLinks)
// {
//     link.innerText = 'I AM A LINK!';
// }



//this will just set the text, not change the markup
// document.querySelector('h1').innerText = '<i>Askdgh</i>';


//This appears to just give the text like innertext would
console.log(document.querySelector('h1').innerHTML);


//however, this has markup, and thus innherHTML shows the markup inside as well
console.log(document.querySelector('p').innerHTML);

// innerHTML kind of only useful when you want the change stuff within the html
// document.querySelector('h1').innerHTML = '<i>Askdgh</i>';
// document.querySelector('h1').innerHTML += '<sup>Askdgh</sup>';


//CAN CHANGE THE ID USING QUERY SELECTOR AND .ID
// document.querySelector('#banner').id = 'whoops';

//gives the full link
// document.querySelector('#banner').src


// This will go through the JS object
const firstLink = document.querySelector('a');
console.log(firstLink.href);

//This will take directly from the html
console.log(firstLink.getAttribute('href'));

// can check for other attributes as well, however if none are found, will return null
console.log(firstLink.getAttribute('id')); //Null
console.log(firstLink.getAttribute('class')); //Null
console.log(firstLink.getAttribute('title')); // "Will return "List of chicken breeds"

// can change attributes using setAttribute

// console.log(firstLink.setAttribute('href', 'http://www.google.com'));

console.log(document.querySelector('input')[1])

// can access different attributes and work with them now
const input = document.querySelector('input[type="text"]');

// could change the type to password or color
input.type = 'password';
input.type= 'color';
input.setAttribute('type', 'text');

// CHANGING STYLES

const h1 = document.querySelector('h1');
// does not contain styles from the style sheet, will only contain inline styles 
console.log(h1.style);

// can use it to change styles though, but not preferred 
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';

// Better way to use it is to apply it to classes
// here we will select every anchor tag and give them a different color

const allLinks = document.querySelectorAll('a');

for(let link of allLinks)
{
    link.style.color = '#006c86';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// Another way of getting the actual computed styles
console.log(window.getComputedStyle(h1));
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).fontFamily);
console.log(window.getComputedStyle(h1).marginLeft);
console.log(window.getComputedStyle(h1).margin);

// TOPIC: classList Examples

const h2= document.querySelector('h2');

console.log(h2.getAttribute('class')) // null
// console.log(h2.setAttribute('class', 'purple')); //changes color to purple
// // If we attempt to add a border it will overide it
// console.log(h2.setAttribute('class', 'border'));
// //We could combine them like this using a string template literal

// let currentClasses = h2.getAttribute('class');
// console.log(h2.setAttribute('class' `${currentClasses} purple`)) //this will give the purple color and the border

// but there is a better way to work with classes

console.log(h2.classList.add('purple'));
console.log(h2.classList.add('border'));

// can also remove 

console.log(h2.classList.remove('border'));

// toggle, as the name implies will toggle classes, so since this already has class of purple, toggling it will turn it off
console.log(h2.classList.toggle('purple'));
// calling it again would turn it back on


// TRAVERSING PARENT/CHILD/SIBLING

const firstBold = document.querySelector('b');

console.log(firstBold);
console.log(firstBold.parentElement); // This will give the paragraph tags 
console.log(firstBold.parentElement.parentElement); //This will give the body tags
console.log(firstBold.parentElement.parentElement.parentElement); //This will give the root html element

const paragraph = firstBold.parentElement;

console.log(paragraph.children); //The children are two bold elements and six anchor tag elements
console.log(paragraph.children[0]); //This will give the first element, which is <b>Silkie</b>


const squareImg = document.querySelector('.square');
console.log(squareImg.parentElement); //The body is the parent of the imgs, and has no children

// previousSibling AND nextSibling WILL GIVE US THE NODE AND NOT THE ELEMENT, WHEREAS nextElementSibling WOULD

console.log(squareImg.nextSibling); //gives '#text' which is a text node
console.log(squareImg.previousSibling); //also gives #text node

console.log(squareImg.nextElementSibling); //This will give the actual next element, gives the next adjacent img
console.log(squareImg.previousElementSibling); //Will give the paragraph of text before the first image

// APPEND AND APPENDCHILD

 const newImg = document.createElement('img'); // this will make an empty image

 console.dir(newImg);

 newImg.src = 'https://images.unsplash.com/photo-1641805963238-a8d4717575d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

 document.body.appendChild(newImg);

 newImg.classList.add('square');

 const newH3 = document.createElement('h3');

 newH3.innerText = 'I am new!';

 document.body.appendChild(newH3);

const p = document.querySelector('p');

p.append(' i am new text, yaaaaay!!!', 'asdasdsdfgsdfsdf'); //can append multiple things, adds it to the end of the current paragraph in this case

// can use prepend as well
const newB = document.createElement('b');
newB.append('Hi ');
console.log(newB);

p.prepend(newB); //This is now the first child

//attempting to insert something in between the h1 and first img

const newh2 = document.createElement('h2');
newh2.append('Are adorable chickens');
console.log(newh2);
const newh1 = document.querySelector('h1');
newh1.insertAdjacentElement('afterend', newh2);


// REMOVE CHILD AND REMOVE

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

// could do it in one line as well

const b = document.querySelector('b');
b.parentElement.removeChild(b);


// using "remove" instead of removeChild

// const img = document.querySelector('img');
// img.remove();










