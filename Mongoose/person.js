const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() =>
{
    console.log('Connection Open.');
})
.catch(err =>
{    
    console.log("Oh no, an error occurred");
    console.log(err);
})

const personSchema = new mongoose.Schema({

    first: String,
    last: String
    
})

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
})

personSchema.pre('save', async function() {

    this.first = 'Yo';
    this.last = 'Mama';
     console.log("About to save...")
})

personSchema.post('save', async function() {

    console.log("Just saved")
})

const Person = mongoose.model('Person', personSchema);
