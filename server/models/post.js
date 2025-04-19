const mongoose = require('mongoose');

let postModel = {};

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

postModel = mongoose.model('Post', postSchema);

module.exports = postModel;