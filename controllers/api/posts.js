const Post = require('../../models/Post')


async function create(req,res){
    try {
        const post = await Post.create(req.body)
        res.json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}




module.exports = {
    create
}