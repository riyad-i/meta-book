const Post = require('../../models/Post')


async function create(req,res){
    try {
        const post = await Post.create(req.body)
        res.json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function index(req, res) {
    try{
      const posts = await Post.find({})
      res.status(200).json(posts);
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
}

async function remove(req,res){
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    create,
    index,
    remove
}