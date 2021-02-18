const mongoose  = require('mongoose');

///  THIS POST SCHEMA IS FOR TESTING PURPOSE /////

const PostSchema  = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts',PostSchema);