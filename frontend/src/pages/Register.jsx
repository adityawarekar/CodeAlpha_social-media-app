import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

      await API.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      navigate("/login");

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
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-3 w-full mb-3"
          onChange={handleChange}
        />

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
          className="bg-blue-500 text-white w-full p-3 rounded"
        >
          Register
        </button>

      </form>

    </div>

  );

};

export default Register;