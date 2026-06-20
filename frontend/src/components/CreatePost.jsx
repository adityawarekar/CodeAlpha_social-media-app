import { useState } from "react";
import API from "../api";

const CreatePost = ({ fetchPosts }) => {

  const [content, setContent] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/posts",
        {
          content,
        },
        {
          headers: {
            Authorization:
              localStorage.getItem(
                "token"
              ),
          },
        }
      );

      setContent("");

      fetchPosts();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow mb-5"
    >

      <textarea
        placeholder="What's on your mind?"
        className="w-full border p-3 rounded"
        rows="4"
        value={content}
        onChange={(e) =>
          setContent(
            e.target.value
          )
        }
      />

      <button
        className="mt-3 bg-blue-500 text-white px-5 py-2 rounded"
      >
        Post
      </button>

    </form>

  );

};

export default CreatePost;