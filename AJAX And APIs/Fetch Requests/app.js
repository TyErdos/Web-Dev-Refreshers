// fetch("https://swapi.dev/api/people/1/")
// .then((res) => 
//     {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => 
//     {
//     console.log("Json done", data)
//     })
//     .catch((e) => 
//     {
//         console.log("Error!", e)
//     });


// fetch("https://swapi.dev/api/people/1/")
// .then((res) => 
//     {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => 
//     {
//         console.log("Json done", data);
//         return fetch("https://swapi.dev/api/people/2/");
        
//     })
//     .then((res) => 
//     {
//         console.log('Resolved 2', res)
//         return res.json();
//     })
//     .then((data) => 
//     {
//         console.log("Json done", data);
//     })
//     .catch((e) => 
//     {
//         console.log("Error!", e)
//     });


const loadStarWarsPeople = async () =>
{
    try
    {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
    }
    catch(err)
    {
        console.log("Error", err);
    }
};

loadStarWarsPeople();