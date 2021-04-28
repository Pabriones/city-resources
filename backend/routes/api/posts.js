const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const Account = require('../../models/Account');

// @route Get api/posts
// @desc Create a post
// @acess Private
router.post('/', [ auth, [ check('text', 'Text is required').not().isEmpty() ] ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const account = await Account.findById(req.account.id).select('-password');

		const newPost = new Post({
			text: req.body.text,
			firstname: account.firstname,
			avatar: account.avatar,
			account: req.account.id
		});

		const post = await newPost.save();

		res.json(post);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route Get api/posts
// @desc Get all posts
// @acess Private
router.get('/', auth, async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 });
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route Get api/posts/:id
// @desc  Get post by ID
// @acess Private
router.get('/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post) {
			return res.status(404).json({ msg: 'Post not found' });
		}

		res.json(post);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Post not found' });
		}
		res.status(500).send('Server Error');
	}
});

// @route DELETE api/posts/:id
// @desc DELETE a posts
// @acess Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post) {
			return res.status(404).json({ msg: 'Post not found' });
		}

		// Check user
		if (post.account.toString() !== req.account.id) {
			return res.status(401).json({ msg: 'Account not authorized' });
		}

		await post.remove();

		res.json({ msg: 'Post removed' });
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Post not found' });
		}
		res.status(500).send('Server Error');
	}
});

// @route PUT api/posts/like/:id
// @desc  Like a post
// @acess Private

router.put('/like/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		//Check if the post has already been liked
		if (post.likes.filter((like) => like.account.toString() === req.account.id).length > 0) {
			return res.status(400).json({ msg: 'Post already liked' });
		}

		post.likes.unshift({ account: req.account.id });

		await post.save();

		res.json(post.likes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route PUT api/posts/unlike/:id
// @desc  Like a post
// @acess Private

router.put('/unlike/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		//Check if the post has already been liked
		if (post.likes.filter((like) => like.account.toString() === req.account.id).length === 0) {
			return res.status(400).json({ msg: 'Post has not been liked' });
		}

		//Get remove index
		const removeIndex = post.likes.map((like) => like.account.toString()).indexOf(req.account.id);

		post.likes.splice(removeIndex, 1);

		await post.save();

		res.json(post.likes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route Get api/posts/comments/:id
// @desc Comment on a post
// @acess Private
router.post('/comment/:id', [ auth, [ check('text', 'Text is required').not().isEmpty() ] ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const account = await Account.findById(req.account.id).select('-password');
		const post = await Post.findById(req.params.id);

		const newComment = {
			text: req.body.text,
			firstname: account.firstname,
			avatar: account.avatar,
			account: req.account.id
		};

		post.comments.unshift(newComment);

		await post.save();

		res.json(post.comments);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route DELETE api/posts/comments/:id/:comment_id
// @desc  Delete comment
// @acess Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		//Pull out comment
		const comment = post.comments.find((comment) => comment.id === req.params.comment_id);

		//Make sure comment exist
		if (!comment) {
			return res.status(404).json({ msg: 'Comment does not exists' });
		}
		//Check user
		if (comment.account.toString() !== req.account.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}
		//Get remove Index
		const removeIndex = post.comments.map((comment) => comment.account.toString()).indexOf(req.account.id);

		post.comments.splice(removeIndex, 1);

		await post.save();

		res.json(post.comments);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
