// axios.get("https://swapi.dev/api/people/1")
// .then((res) => 
// {
//     console.log("response: ", res)

// })
// .catch((err) =>
// {
//     console.log("Error", err);
// })

// const getStarWarsPerson = async (id) =>
// {
//     try
//     {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data)
//     }
//     catch(err)
//     {
//         console.log("Error", err);
//     }
    
// }

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const joke = document.querySelector('#jokes');
const button = document.querySelector('button');




const addNewJoke = async () =>
{
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}



const getDadJoke = async () => 
{
    try
    {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        // console.log(res.data.joke);
        return res.data.joke;
    }
    catch(err)
    {
        console.log("No jokes available, sorry", err);
    }
    
    
    
}

button.addEventListener('click', addNewJoke);

getDadJoke();