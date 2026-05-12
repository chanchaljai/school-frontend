import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Register successful");
        navigate("/login");
      } else {
        alert(data.message || "Error occurred");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">

      {/* Navbar */}
      <Navbar />

      {/* Content Center */}
      <div className="flex flex-1 items-center justify-center px-4">

        {/* Card */}
        <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-6">

          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Create Account
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            className="space-y-4"
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />

            {/* Role */}
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="accountant">Accountant</option>
              <option value="admin">Admin</option>
            </select>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Register
            </button>

          </form>

          <p
            onClick={() => navigate("/login")}
            className="text-center text-sm text-blue-600 mt-4 cursor-pointer hover:underline"
          >
            Already have an account? Login
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;