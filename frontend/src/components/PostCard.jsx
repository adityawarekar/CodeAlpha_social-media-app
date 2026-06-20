import API from "../api";

const PostCard = ({
  post,
  fetchPosts,
}) => {

  const handleLike =
    async () => {

      try {

        await API.put(
          `/posts/like/${post._id}`
        );

        fetchPosts();

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div className="bg-white rounded-2xl shadow-md p-5 mb-4">

      <div className="flex items-center gap-3 mb-3">

        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">

          {post.user?.name?.charAt(0)}

        </div>

        <h3 className="font-bold text-lg">

          {post.user?.name}

        </h3>

      </div>

      <p className="text-gray-700">

        {post.content}

      </p>

      <button
        onClick={handleLike}
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg"
      >
        ❤️ Like
      </button>

      <p className="mt-2 text-gray-500">

        Likes: {post.likes}

      </p>

    </div>

  );

};

export default PostCard;