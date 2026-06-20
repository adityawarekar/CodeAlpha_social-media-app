const express = require("express");

const router = express.Router();

const auth =
  require("../middleware/auth");

const {
  createPost,
  getPosts,
  likePost
} = require(
  "../controllers/postController"
);


router.post(
  "/",
  auth,
  createPost
);

router.get(
  "/",
  getPosts
);

router.put(
  "/like/:id",
  likePost
);
module.exports = router;