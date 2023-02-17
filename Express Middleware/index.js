const express = require('express');
const morgan = require('morgan');
const app = express();



app.use(morgan('tiny'));

app.use((req, res, next) => 
{
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) =>
{
    console.log("I love dogs!");
    next();
})

const verifyPassword = ((req,res,next) =>
{
    const {password} = req.query;
    if(password === 'chickennugget')
    {
        next();
    }
    res.send('Sorry, you need a password.')
})

// app.use((req, res, next) => 
// {
//     console.log("This is my first middleware");
//     return next(); //need next in order to move on
//     // console.log("This is my first middleware - after calling next()"); if you return next, this will not run
// })
// app.use((req, res, next) => 
// {
//     console.log("This is my second middleware");
//     return next();
// })

app.get('/', (req, res) => 
{
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page');
})

app.get('/dogs', (req, res) => 
{
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof');
})

app.get('/secret', verifyPassword, (req, res) =>
{
    res.send('My secret is... yo mama, gottem')
})

app.use((req, res) =>
{
    res.status(404).send("404 NOT FOUND")
})

app.listen('3000', () => 
{
    console.log("App is running on localhost:3000...")
})