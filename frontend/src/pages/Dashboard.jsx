import { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";

const Dashboard = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const { data } = await API.get("/posts");

        setPosts(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchPosts();

  }, []);

  const totalPosts = posts.length;

  const totalLikes = posts.reduce(
    (sum, post) => sum + post.likes,
    0
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        <div className="max-w-6xl mx-auto p-6">



          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-lg mb-8">

            <h1 className="text-4xl font-bold mb-3">
              Social Media Dashboard 🚀
            </h1>

            <p className="text-lg opacity-90">
              Monitor posts, engagement, and platform activity.
            </p>

          </div>



          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-gray-500">
                Total Posts
              </h2>

              <p className="text-4xl font-bold mt-3">
                {totalPosts}
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-gray-500">
                Total Likes
              </h2>

              <p className="text-4xl font-bold mt-3">
                ❤️ {totalLikes}
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-gray-500">
                Engagement
              </h2>

              <p className="text-4xl font-bold mt-3">
                {totalPosts === 0
                  ? 0
                  : Math.round(
                    totalLikes /
                    totalPosts
                  )}
              </p>

            </div>

          </div>



          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              About This Platform
            </h2>

            <p className="text-gray-600 leading-7">

              This Social Media Platform allows users to
              register, login securely using JWT
              authentication, create posts, interact with
              content through likes, and monitor platform
              activity through a dashboard.

            </p>

          </div>



          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Platform Features
            </h2>

            <ul className="space-y-3 text-gray-700">

              <li>✅ User Registration</li>

              <li>✅ Secure Login Authentication</li>

              <li>✅ Create Posts</li>

              <li>✅ View Posts</li>

              <li>✅ Like Posts</li>

              <li>✅ Dashboard Analytics</li>

              <li>✅ Responsive User Interface</li>

            </ul>

          </div>



          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-4">
              Recent Activity
            </h2>

            {posts.length === 0 ? (

              <p>No posts available.</p>

            ) : (

              posts.slice(0, 5).map((post) => (

                <div
                  key={post._id}
                  className="border-b py-3"
                >

                  <h3 className="font-semibold">
                    {post.user?.name}
                  </h3>

                  <p className="text-gray-600">
                    {post.content}
                  </p>

                  <span className="text-sm text-pink-500">
                    ❤️ {post.likes}
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </>

  );

};

export default Dashboard;