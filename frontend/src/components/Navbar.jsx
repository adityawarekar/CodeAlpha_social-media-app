import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <nav className="bg-slate-900 text-white shadow-lg">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/feed"
          className="text-2xl font-bold"
        >
          SocialHub 🚀
        </Link>

        <div className="flex gap-6 items-center">

          <Link
            to="/feed"
            className="hover:text-blue-400 transition"
          >
            Feed
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-400"
          >
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;