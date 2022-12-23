// A short clean syntax to "unpack" values from arrays or properties from objects into distinct variables

const scores = [10987654, 9946543, 532165, 32154, 6489, 444];

//Could do this to get the high scores

const highScore = scores[0];
const secondHighScore = scores[1];

// ARRAY DESTRUCTURING
// USING DESTRUCTURING WITH ARRAYS

const [Gold, Silver, Bronze, ...Others] = scores;

console.log(`Gold: ${Gold}, Silver: ${Silver}, Bronze: ${Bronze}`);
console.log(`And everyone else: ${Others}`);

// OBJECT DESTRUCTURING 

const user = 
{
    email: 'harvey@gmail.com',
    password: 'sCoTT1948sMith',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly dripped out boy',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// Could do this

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// using destructuring 

// const {email, firstName, lastName, city, bio} = user;

// can rename, so now born is the variable birthYear
// const {born: birthYear} = user;
// const {died: deathYear} = user;

// can set a default value, as with died, since she is still living
const {city, state, died = 'N/A'} = user2;


// PARAM DESTRUCTURING


//could do like this
// function fullName(user)
// {
//     return `${user.firstName} ${user.lastName}`;

// }

// BUT NOW USING PARAM DESTRUCTURING.

// function fullName(user)
// {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;

// }

// USING DESTRUCTURING ON THE WAY INTO THE FUNCTION, IF ONLY USING SOME THINGS FROM AN OBJECT

function fullName({firstName, lastName})
{
    return `${firstName} ${lastName}`;
}



const movies = [
    {
        title: 'Amedeus',
        score: 99,
        year: 1984
    },

    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },

    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },

    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },

    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },

    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },

    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },

    {
        title: 'Alien',
        score: 90,
        year: 1979
    }

]

// movies.filter((movie) => movie.score >= 90 );

// AGAIN CAN DESTRUCTURE ON THE WAY IN
// movies.filter(({score}) => score >= 90 );

// movies.map(movie => {
//     return `${movie.title} ${movie.year} is rated ${movie.score}`
// })

movies.map(({title, score, year}) => {
    return `${title} ${year} is rated ${score}`
})






