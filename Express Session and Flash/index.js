const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

const sessessionOptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false};
app.use(session(sessessionOptions))
app.use(flash())



app.get('/viewcount', (req, res) =>
{
    if(req.session.count)
    {
        req.session.count += 1;
    }
    else
    {
        req.session.count = 1;

    }
    res.send(`You have viewed this page ${req.session.count} times`);

})

app.get('/register', (req, res) =>
{
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) =>
{
    const {username} = req.session;
    res.send(`Welcome ${username}`);
    req.flash('success', 'Successfully logged in')
})

app.use((req, res, next) =>
{
    res.locals.messages = req.flash(success);
    next();
})

app.listen(3000, () => 
{
    console.log('Listening on port 3000')
})