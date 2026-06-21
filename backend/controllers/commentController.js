const Comment =
require("../models/Comment");

exports.createComment =
async (req,res)=>{

  try{

    const comment =
    await Comment.create({

      user:req.user.id,

      post:req.params.postId,

      text:req.body.text

    });

    res.json(comment);

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};

exports.getComments =
async (req,res)=>{

  try{

    const comments =
    await Comment.find({

      post:req.params.postId

    }).populate(
      "user",
      "name"
    );

    res.json(comments);

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};