const { Post } = require('../models');

const postData = [
    {
        title: "public!",
        post_content: " post comments make this ",
        user_id: 3
    },
    {
        title: "BLUE EXPHOS MIINECRAFT VIDEOS",
        post_content: " NEW INFO PRINTED FROM THE POST COTENT ",
        user_id: 1
    },
    {
        title: "Put in the Work Norms!",
        post_content: " The Life Spring Hud Power adapts",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: " A NEW WORKING power post",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Seeding makes the Tech New Go Public",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;