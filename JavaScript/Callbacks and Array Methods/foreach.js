const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function print(element){
    console.log(element);
}


//Could do this for each element in the array, but can use forEach instead
// print(numbers[0]);
// print(numbers[1]);

// numbers.forEach(print);

numbers.forEach(function (el)
{
    if(el % 2 === 0)
    {
         console.log(el);
    }
   
});

// for (let el of numbers)
// {
//     console.log(el);
// }

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

movies.forEach(function(movie)
{
    console.log(`${movie.title} - ${movie.score} / 100`)

})