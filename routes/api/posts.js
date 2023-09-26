const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// GET /api/posts
router.get('/', postsCtrl.index);