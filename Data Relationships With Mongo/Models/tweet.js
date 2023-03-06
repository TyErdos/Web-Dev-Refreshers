const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => 
{
    console.log("Mongo Connection Open!");
})
.catch(err =>
{
    console.log("Oh no, Mongo connection error!");
    console.log(err);
})

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({username: 'chickenfan99', age: 61});
//     const user = await User.findOne({username: 'chickenfan99'});
//     const tweet2 = new Tweet({text: 'bock bok bok', likes: 999});
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () => 
{
   const t = await Tweet.find({}).populate('user') //name of the field, not the model
   console.log(t);
}

findTweet();
