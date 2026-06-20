import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api";

import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

const Feed = () => {

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {

    try {

      const { data } = await API.get("/posts");

      setPosts(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      navigate("/login");

      return;

    }

    fetchPosts();

  }, []);

  return (

    <>

      <Navbar />

      <div className="min-h-screen bg-slate-100">
        <div className="max-w-2xl mx-auto p-5">

          <h1 className="text-4xl font-bold mb-5">
            Social Feed
          </h1>

          <CreatePost
            fetchPosts={fetchPosts}
          />

          {posts.length === 0 ? (

            <p>No posts yet.</p>

          ) : (

            posts.map((post) => (

              <PostCard
                key={post._id}
                post={post}
                fetchPosts={fetchPosts}
              />

            ))

          )}

        </div>
        </div>

      </>

      );

};

      export default Feed;