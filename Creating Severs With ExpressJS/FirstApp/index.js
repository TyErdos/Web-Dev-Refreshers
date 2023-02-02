const express = require("express");
const app = express();
// console.dir(app);

// app.use((request, response) => 
// {
//     console.log("We got a new request!");
//     // console.dir(request);
//     // response.send("Hello, we got your request. This is a response.");
//     // response.send({color: 'red'});
//     // response.send('<h1>This is my webpage!<h1>');
// })

// Routing examples
// /cats => 'meow'
// /dogs => 'woof'
// / => 'Welcome'

app.get('/', (request, response) =>
{
    console.log("Root Request");
    response.send("Went to root");
})

app.post('/cats', (request, response) => 
{
    console.log("Post request to cats");
    response.send('Post request to /cats');
})

app.get('/cats', (request, response) => 
{
    console.log('Cat Request');
    response.send('Meow');
})

app.get('/dogs', (request, response) =>
{
    console.log("Dog Request");
    response.send("Woof");
})

// use colon to define a pattern 
app.get('/r/:subreddit/:postId', (request, response) => 
{
    const {subreddit, postId} = request.params;
    response.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

// WORKING WITH QUERY STRINGS
app.get('/search', (request, response) =>
{
    const {q} = request.query;
    console.log(request.query);
    if(!q)
    {
        response.send("Nothing found if nothing searched");
    }
    response.send(`<h1>Search results for: ${q}</h1>`);
})

// If this is put first, it will not recognize the routes that come after
// But can be used to respond to any other route that is not defined to say
// it doesnt recognize that path our route

app.get('*', (request, response) => 
{
    response.send(`I don't know that path`);

})

app.listen(3000, () => 
{
    console.log("Listening on Port 3000");
})