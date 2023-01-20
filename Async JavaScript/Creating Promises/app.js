// const fakeRequest = (url) =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         const rand = Math.random();


//         setTimeout(() =>
//         {
//             if(rand < 0.7)
//             {
//                 resolve('Your fake data here');
//             }     

//             reject('Request Error');

//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then((data) =>
// {
//     console.log("Done with request");
//     console.log("Data is: ", data);
// })
// .catch((err) =>
// {
//     console.log("Oh no", err)
// })



const delayColor = (color, delay) =>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {

            document.body.style.backgroundColor = color;
            resolve();

        }, delay)

    })
}

delayColor('red', 1000)
    .then(() =>
    {
        return delayColor('orange', 1000);
    })
    .then(() =>
    {
        return delayColor('greem', 1000);
    })
    .then(() =>
    {
        return delayColor('yellow', 1000);
    })
    .then(() =>
    {
        return delayColor('blue', 1000);
    })
    .then(() =>
    {
        return delayColor('indigo', 1000);
    })
    .then(() =>
    {
        return delayColor('violet', 1000);
    })


