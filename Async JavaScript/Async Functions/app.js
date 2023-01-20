                                                                        // THE ASYNC KEYWORD


// async function hello()
// {

// }

// const sing = async() =>
// {
//     throw "Oh No. Problem!";
//     return 'LALALA';
// }

// sing().then((data) =>
// {
//     console.log("Promise Resolved With: ", data)
// })
// .catch((err) =>
// {
//     console.log('Oh no, promise rejected');
//     console.log(err);
// })

// const login = async(username, password) =>
// {
//     if(!username || !password)
//     {
//         throw 'Missing Credentials';
//     }
//     if(password === 'corgifeetarecute')
//     {
//         return 'Welcome';
//     }
//     else
//     {
//         throw 'Invalid Password';
//     }
// }

// login('askjfgkjdf', 'corgifeetarecute')
//     .then(msg => 
//         {
//             console.log("Logged In");
//             console.log(msg);
//         })
//         .catch(err =>
//         {
//             console.log("Error");
//             console.log(err);
//         })


                                                                            // THE AWAIT KEYWORD



// const delayColor = (color, delay) =>
// {
//     return new Promise((resolve, reject) => 
//     {
//         setTimeout(() => 
//         {

//             document.body.style.backgroundColor = color;
//             resolve();

//         }, delay)

//     })
// }


// async function rainbow()
// {
//     await delayColor('red', 1000);
//     await delayColor('orange', 1000);
//     await delayColor('yellow', 1000);
//     await delayColor('green', 1000);
//     await delayColor('blue', 1000);
//     await delayColor('indigo', 1000);
//     await delayColor('violet', 1000);

//     return "All Done";
// }

// // rainbow().then(() => console.log("End of Rainbow!"));

// async function printRainbow()
// {
//     await rainbow();
//     console.log("End of Rainbow!")
// }

// printRainbow();



// WHAT HAPPENS WHEN OUR PROMISES ARE REJECTED


const fakeRequest = (url) => 
{
    return new Promise((resolve, reject) =>
    {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() =>
        {
            if(delay > 4000)
            {
                reject('Connection Timeout :( ');
            }
            else
            {
                resolve(`Here is your fake data from ${url}`);
            }
            
        }, delay)
    })
}

async function makeTwoRequests()
{
    try
    {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    }
    catch (e)
    {
        console.log('Caught an error: ', e);
    }
    
}

