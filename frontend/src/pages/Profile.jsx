import Navbar from "../components/Navbar";

const Profile = () => {

  const userName =
    localStorage.getItem("name") || "User";

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        <div className="max-w-4xl mx-auto p-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex items-center gap-5">

              <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold">

                {userName.charAt(0)}

              </div>

              <div>

                <h1 className="text-4xl font-bold">

                  {userName}

                </h1>

                <p className="text-gray-500">

                  SocialHub Member
                </p>

              </div>

            </div>

            <div className="mt-8">

              <h2 className="text-2xl font-bold mb-2">
                About
              </h2>

              <p className="text-gray-600">
                Welcome to SocialHub.
                Share posts, connect with friends
                and engage with the community.
              </p>

            </div>

          </div>

        </div>

      </div>

    </>
  );

};

export default Profile;