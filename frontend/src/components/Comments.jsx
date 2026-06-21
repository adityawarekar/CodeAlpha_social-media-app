import { useState } from "react";

const Comments = () => {

  const [comment,setComment] =
  useState("");

  const [comments,setComments] =
  useState([]);

  const handleSubmit = () => {

    if(!comment.trim()) return;

    setComments([
      ...comments,
      comment
    ]);

    setComment("");

  };

  return (

    <div className="mt-4">

      <input
      type="text"
      placeholder="Write a comment..."
      value={comment}
      onChange={(e)=>
      setComment(e.target.value)
      }
      className="border p-2 rounded w-full"
      />

      <button
      onClick={handleSubmit}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Comment
      </button>

      <div className="mt-3">

        {comments.map((c,index)=>(
          <div
          key={index}
          className="bg-gray-100 p-2 rounded mt-2"
          >
            💬 {c}
          </div>
        ))}

      </div>

    </div>

  );

};

export default Comments;