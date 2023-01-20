const fakeRequestCallback = (url, success, failure) => 
{
    const delay = Math.floor(Math.random() * 4500) + 500;

    setTimeout(() => 
    {
        if(delay > 4000)
        {
            failure('Connection Timeout :(');
        }
        else
        {
            success(`Here is your fake data from ${url}`);

        }

    }, delay)

}

const fakeRequestPromise = (url) => 
{
    return new Promise((resolve,reject) => 
    {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() => 
        {
            if(delay > 4000)
            {
                reject('Connection Timeout :(');
            }
            else
            {
                resolve(`Here is your fake data from ${url}`)
            }

        }, delay)

    })

}

// CALLBACK HELL

// fakeRequestCallback('books.com/page1', 
// function(response) 
// {
//     console.log("It worked!");
//     console.log(response);

//         fakeRequestCallback('books.com/page2',
//         function(response)
//         {
//             console.log("It worked again!");
//             console.log(response);

//                 fakeRequestCallback('books.com/page3', 
//                 function(response)
//                 {
//                     console.log("It worked again!");
//                     console.log(response);
//                 },
//                 function(err) 
//                 {
//                     console.log('Error (3rd Request) :( ', err);

//                 })

//         },
//         function(err) 
//         {
//             console.log('Error (2nd Request) :( ', err);
//         })
// },
// function(err)
// {
//     console.log('Error :( ', err);
// })




// ONE WAY OF WRITING PROMISES

// const request = fakeRequestPromise('Yelp.com/api/coffee/page1');

// request
//     .then(() => 
//     {
//         console.log('Promise Resolved')
//         console.log("It worked!");
//     })
//     .catch(() =>
//     {
//         console.log('Promise Rejected')
//         console.log("Error");
//     })



//CHAINED VERSION OF WRITING PROMISES

// fakeRequestPromise('Yelp.com/api/coffee/page1')
//     .then(() => 
//     {
//         console.log("It worked! (Page 1)");

//             fakeRequestPromise('Yelp.com/api/coffee/page2')
//                 .then(() => 
//                 {
//                     console.log("It worked! (Page 2)");

//                     fakeRequestPromise('Yelp.com/api/coffee/page3')
//                     .then(() => 
//                     {
//                         console.log("It worked! (Page 3)");
//                     })
//                     .catch(() => 
//                     {
//                         console.log("Error (Page 3)");
//                     })
//                 })
//                 .catch(() =>
//                 {
//                 console.log("Error (Page 2)");
//                 })
//     })
//     .catch(() =>
//     {
//         console.log("Error (Page 1)");
//     })


// CLEANER WAY TO WRITE PROMISES

fakeRequestPromise('Yelp.com/api/coffee/page1') 
    .then((data) =>
    {
        console.log("It worked! (Page 1)");
        console.log(data);
        return fakeRequestPromise('Yelp.com/api/coffee/page2');
    })
    .then((data) =>
    {
        console.log("It worked! (Page 2)");
        console.log(data);
        return fakeRequestPromise('Yelp.com/api/coffee/page3');
    })
    .then((data) => 
    {
        console.log('It worked! (Page 3)');
        console.log(data);
    })
    .catch((err) =>
    {
        console.log("Oh no, a request failed somewhere");
        console.log(err);
    })







