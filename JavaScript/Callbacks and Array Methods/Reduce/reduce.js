const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices)
// {
//     total += price;
// }
// console.log(total)

const total = prices.reduce((total, price) => {
    return total + price;
});

const minPrice = prices.reduce((min, currPrice) => {
    if (currPrice < min)
    {
        return currPrice;
    }
    return min;

})

const maxPrice = prices.reduce((max, currPrice) => {
    if (currPrice > max)
    {
        return currPrice;
    }
    return max;

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

const highestRated = movies.reduce((high, currMovie) => {
    if(currMovie.score > high.score)
    {
        return currMovie;
    }
    return high;
})

const evens = [2,4,6,8];

//can specify second argument which will be the new start 
const newStart = evens.reduce((sum, num) =>  sum + num, 100)