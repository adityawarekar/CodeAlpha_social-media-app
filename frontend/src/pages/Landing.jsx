import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h1 className="text-5xl font-bold mb-4">
          SocialHub 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          Connect with friends and share your thoughts
        </p>

        <div className="flex gap-4 justify-center">

          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Landing;