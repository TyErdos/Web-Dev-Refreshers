
// const add = function(x,y){
//     return x + y;
// }

//These two are the exact same, just different ways of writing a function

const add = (x,y) => {
    return x + y;
}

//add(9,4)


const square = (num) => {
    return num ** 2;
}

// const rollDie = () =>
// {
//     return Math.floor(Math.random() * 6) + 1;
// }


//Can write arrow functions like this, called implicit return, replace curly
// braces with parentheses. Only work with a single expression to be evaluated
const rollDie = () =>
(
    Math.floor(Math.random() * 6) + 1
);

// An even shorter shorthand for implicit returns with arrow functions
const addition = (a,b) => a + b;

const movies = [
    {
        title: 'Amedeus',
        score: 99
    },

    {
        title: 'Stand by me',
        score: 85
    },

    {
        title: 'Parasite',
        score: 95
    },

    {
        title: 'Alien',
        score: 90
    }

]

const newMovies = movies.map(movie =>
(
    `${movie.title} - ${movie.score / 10}`
))