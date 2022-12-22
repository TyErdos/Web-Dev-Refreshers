const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// filter does not change the original array, just creates a new array 

// numbers.filter(n => {
//     return n === 4;
// })

 numbers.filter(n => {
    return n < 10;
})

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

const criticalAcclaim = movies.filter(movie => {
    return movie.score > 80;
})

//Short-hand version
// const criticalAcclaim = movies.filter(movie => movie.score > 80)

const criticalTitles = criticalAcclaim.map(movie => movie.title);

// This runs the same thing as the line above, just in one go all together
movies.filter(movie => movie.score > 80).map(movie => movie.title);


const notSoCriticallyAcclaimed = movies.filter(movie => {
    return movie.score < 70;
})

const recentMovies = movies.filter(movie => {
    return movie.year > 2000;
})


