const mongoose  = require('mongoose');

//// MEME SCHEMA FOR POSTING  MEME INTO THE DATABASE 

const MemeSchema  = mongoose.Schema({
    name: {
        type: String,
        require: true,
        default: "Akash Singh (Developer)"
    },
    caption: {
        type: String,
        require: true,
        default: "This is Meme Caption"
    },
    url: {
        type: String,
        default: "https://bit.ly/2YRYQvv",
        require: true
    }
})

module.exports = mongoose.model('Meme',MemeSchema);