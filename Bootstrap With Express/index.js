const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs'); //don't have to require ejs in here because of this line
app.set('views', path.join(__dirname, '/views')); //comes built in with node

app.get('/', (req, res) => 
{
    res.render('home.ejs', {name: "Home"});
})

app.get('/cats', (req, res) =>
{
    const cats = 
    [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Wintston'
    ]
    res.render('cats', {cats, name: "cats"})
})

app.get('/r/:subreddit', (req,res) =>
{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data)
    {
        res.render('subreddit.ejs', { ...data })
    }
    else
    {
        res.render('notfound.ejs', {subreddit, name: "Error: Not Found"})
    }
    
})

app.get('/rand', (req, res) =>
{
    const randNum = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', {randNum, name: 'random'})
})

app.listen('3000', () =>
{
    console.log("Listening on port 3000");

})