const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is really cooll!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "everything works"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: " This is the best day ever"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: " we have good hype"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "ThHIS IS WORTH CAPS LOCKS"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "THIS IS AMAZING WORK"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "GOOD CODE"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: " good work tools in the coding field "
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;