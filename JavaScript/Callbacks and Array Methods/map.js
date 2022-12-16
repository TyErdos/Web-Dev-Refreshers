const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const doubles = numbers.map(function(num)
{
    return num * 2;

})


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

const titles = movies.map(function(movie)
{
    return movie.title.toUpperCase();
})