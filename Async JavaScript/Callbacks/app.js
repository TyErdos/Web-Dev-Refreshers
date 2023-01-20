
// setTimeout( () =>
// {
//     document.body.style.backgroundColor = 'red';

//     setTimeout(() => 
//     {
//         document.body.style.backgroundColor = 'orange';

//         setTimeout(() => 
//         {
//             document.body.style.backgroundColor = 'yellow';

//             setTimeout(() => 
//             {
//                 document.body.style.backgroundColor = 'green';

//                 setTimeout(() => 
//                 {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)

//             }, 1000)

//         }, 1000)

//     }, 1000)

// }, 1000)

const delayedColors = (newColor, delay, doNext) =>
{
    setTimeout(() => 
    {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();

    }, delay)
}

delayedColors('red', 1000, () => 
{
    console.log('Inside Callback');

        delayedColors('orange', 1000, () => 
        {
                delayedColors('yellow', 1000, () => 
                {
                    delayedColors('green', 1000, () => 
                    {
                        delayedColors('blue', 1000, () => 
                        {
    
                        });
    
                    });
    
                });
    
        });
});


// EXAMPLE ONLY: THESE FUNCTIONS DO NOT EXIST CURRENTLY

// searchMoviesAPI('amadeus', () => 
// {
//     saveToMyDB(movies, () => 
//     {
//         // IF IT WORKS, RUN THIS
//     },

//     () =>
//     {
//         // IF I DOESN'T WORK, RUN THIS
//     })
// },

// () => 
// {
//     // IF API IS DOWN, OR REQUEST FAILED RUN THIS

// })
