const Post = require("../models/Post");


// CREATE POST
exports.createPost = async (req, res) => {

  try {

    const post =
      await Post.create({

        user: req.user.id,

        content:
          req.body.content,

      });

    res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET POSTS
exports.getPosts = async (req, res) => {

  try {

    const posts =
      await Post.find()
      .populate(
        "user",
        "name email"
      )
      .sort({
        createdAt: -1,
      });

    res.json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};