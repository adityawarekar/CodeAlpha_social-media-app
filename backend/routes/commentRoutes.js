const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const {
  createComment,
  getComments
}
=
require(
"../controllers/commentController"
);

router.post(
"/:postId",
auth,
createComment
);

router.get(
"/:postId",
getComments
);

module.exports =
router;