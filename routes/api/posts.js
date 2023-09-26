const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// GET /api/posts
router.get('/', postsCtrl.index);

//new
router.post('/', postsCtrl.create);

//edit
// router.get('/:id', postsCtrl.edit)

//view
router.get('/:id', postsCtrl.view)

//delete
router.delete('/:id', postsCtrl.remove)


//edit
// router.put('/:id', postsCtrl.edit)

module.exports = router