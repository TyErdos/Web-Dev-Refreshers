const express = require('express');
const app = express();

const {v4: uuid} = require('uuid');
uuid();

const methodOverride = require('method-override');

const path = require('path');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol funny as heck'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Todd, plz delete ur account'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req,res) =>
{
    res.render('comments/index', {comments})
})
app.get('/comments/new', (req, res) => 
{
    res.render('comments/new')
})

app.post('/comments', (req, res) =>
{
    console.log(req.body);
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()});
    // res.send('It worked!');
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => 
{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/showId', {comment})
})

app.patch('/comments/:id', (req, res) => 
{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');

})

app.get('/comments/:id/edit', (req,res) =>
{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

app.delete('/comments/:id', (req,res) =>
{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    comments = comments.filter(c => c.id !== id) //for that comment, the id is not equal to the id that was in the route
    res.redirect('/commments');
})

// app.get('/tacos', (req, res) => 
// {
//     res.send("GET /tacos Response");
// })


// app.post('/tacos', (req,res) => 
// {
//     const {meat, qty} = req.body;
//     console.log(req.body);
//     res.send(`Order received, here are your ${qty} ${meat} tacos`);
// })

app.listen(3000, () => 
{
    console.log('On port 3000');
})




// CRUD functionality for a comment system
// INDEX ROUTE: GET /comments - list all comments
// CREATE ROUTE: POST /comments - create a new comment 
// SHOW ROUTE: GET /comments/:id - get one comment (using an id)
// UPDATE ROUTE: PUT/PATCH /comments/:id - update one comment
// DESTROY ROUTE: DELETE /comments/:id - destroy one comment