import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } =
        await API.post(
          "/auth/login",
          form
        );

      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/feed");

    } catch (error) {

      alert(
        error.response?.data?.message
      );

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white shadow-lg p-6 rounded-xl"
      >

        <h1 className="text-3xl font-bold mb-5">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 w-full mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-3 w-full mb-3"
          onChange={handleChange}
        />

        <button
          className="bg-green-500 text-white w-full p-3 rounded"
        >
          Login
        </button>

      </form>

    </div>

  );

};

export default Login;